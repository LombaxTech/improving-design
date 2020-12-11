import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import client from "../feathers";
import Message from "./Message";

import { smallBigString } from "../helperFunctions";
import "../styles/chatroom.scss";
import io from "socket.io-client";
const socket = io("http://localhost:3030");

export default function Chatroom({ match }) {
    const chatService = client.service("chat");
    const usersService = client.service("user");

    const [user, setUser] = useState({});
    const [currentPageUser, setCurrentPageUser] = useState({});
    const [chatExists, setChatExists] = useState(true);
    const [chat, setChat] = useState({});
    const [messages, setMessages] = useState([]);

    async function init() {
        // socket.emit("join room", match.params.partnerId);
        // socket.on("message", (e) => setMessages(e.messages));

        try {
            let currentPageUser = await usersService.get(
                match.params.partnerId
            );
            setCurrentPageUser(currentPageUser);

            let user = await client.authenticate();
            user = user.user;
            setUser(user);

            let userId = user._id;
            let partnerId = match.params.partnerId;
            let chatId = smallBigString(userId, partnerId);

            console.log(chatId);

            let chat = await fetch(
                `http://localhost:3030/custom-chat/${chatId}`
            );
            chat = await chat.json();
            console.log(chat);
            if (!chat) {
                console.log("no chat");
                return setChatExists(false);
            }
            setChatExists(true);
            setChat(chat);
            setMessages(chat.messages);
            console.log(chat.messages);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const createChat = async () => {
        const chatId = smallBigString(user._id, currentPageUser._id);
        let members = [user._id, currentPageUser._id];
        try {
            let chat = await chatService.create({ chatId, members });
            console.log(chat);
        } catch (error) {
            console.log(error);
        }
    };

    const createMessage = async () => {
        try {
            const chatId = smallBigString(user._id, currentPageUser._id);

            const message = {
                chatId,
                text: msg,
                sender: user._id,
            };

            let result = await fetch(`http://localhost:3030/message`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(message),
            });
            result = await result.json();

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };

    const sendMessage = async () => {
        if (!chatExists) {
            createChat();
        }
        createMessage();
        socket.emit("message", {
            messages: [...messages, { text: msg, sender: user }],
            roomName: match.params.partnerId,
        });
    };

    const DisplayMessages = () => (
        <div className="messages">
            {messages.map((message, i) => (
                <Message key={i} message={message} />
            ))}
        </div>
    );

    const [msg, setMsg] = useState("");
    const handleMsgChange = (e) => setMsg(e.target.value);

    const SendMessage = () => (
        <div className="send-message">
            <TextField
                value={msg}
                onChange={handleMsgChange}
                variant="outlined"
                className="message-input"
                multiline
                rowsMax={3}
            />
            {/* <Button
                onClick={() => {
                    socket.emit("message", {
                        messages: [...messages, { text: msg, sender: user }],
                        roomName: match.params.partnerId,
                    });
                }}
            >
                Test Socket
            </Button> */}
            <Button variant="contained" onClick={sendMessage} color="primary">
                Send Message
            </Button>
        </div>
    );

    return (
        <div className="chatroom-page">
            <h1>{currentPageUser.name} Chat</h1>
            {DisplayMessages()}
            {SendMessage()}
        </div>
    );
}

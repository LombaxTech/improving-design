import React from "react";
import "./stylesheets/chat.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Chatroom() {
    return (
        <div className="chatroom">
            <h1>chatroom</h1>
            <div className="send-message">
                <TextField
                    className="message-input"
                    variant="outlined"
                    multiline={true}
                    rowsMax={3}
                />
                <Button variant="contained" className="submit-message">
                    Send Message
                </Button>
            </div>
        </div>
    );
}

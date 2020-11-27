import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function Chatroom() {
    return (
        <div className="chatroom">
            <h1>chatroom</h1>
            <div className="messages">
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>{" "}
                <div className="message user-message">
                    <Typography variant="body">Hi!</Typography>
                </div>
                <div className="message partner-message">
                    <Typography variant="body">Hey, whats up?</Typography>
                </div>
            </div>
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

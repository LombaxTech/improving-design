import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import "../styles/chats.scss";

const Chat = () => (
    <div className="chat">
        <div className="profile-pic-name-message">
            <Avatar
                alt="Remy Sharp"
                src="https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                style={{ width: "75px", height: "75px" }}
            />

            <div className="name-message">
                <Typography variant="h6" className="name">
                    Buakaw
                </Typography>
                <Typography variant="body" className="last-message">
                    Hey when is our next lesson?
                </Typography>
            </div>
        </div>
        <div className="date">16:20 12/01/2020</div>
    </div>
);

export default function Chats() {
    return (
        <div>
            <Typography variant="h3" className="page-title">
                Chats
            </Typography>
            <div className="chats">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    );
}

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../styles/tutorcard.scss";

export default function TutorCard({}) {
    return (
        <div className="tutor-card">
            <Avatar
                alt="Remy Sharp"
                src="https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                className="profile-pic"
            />
            <div className="user-info">
                <Typography variant="h5" className="name">
                    Buakaw
                </Typography>
                <Typography variant="h6" className="h6" className="course">
                    Politics
                </Typography>
                <Typography variant="body1" className="uni">
                    University of Bath
                </Typography>
            </div>
            <div className="view-profile">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => (window.location = "/tutor/iaNj9sjs")}
                >
                    View Profile
                </Button>
            </div>
        </div>
    );
}

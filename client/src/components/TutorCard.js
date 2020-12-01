import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "../styles/tutorcard.scss";

export default function TutorCard({ tutor }) {
    return (
        <div className="tutor-card">
            <Avatar
                alt="Remy Sharp"
                src={
                    tutor.profilePictureId
                        ? tutor.profilePictureId
                        : "https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                }
                className="profile-pic"
            />
            <div className="user-info">
                <Typography variant="h5" className="name">
                    {tutor.name}
                </Typography>
                <Typography variant="h6" className="h6" className="course">
                    {tutor.courseDetails.major}
                </Typography>
                <Typography variant="body1" className="uni">
                    {tutor.courseDetails.university}
                </Typography>
            </div>
            <div className="view-profile">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => (window.location = `/tutor/${tutor._id}`)}
                    fullWidth={true}
                >
                    View Profile
                </Button>
            </div>
        </div>
    );
}

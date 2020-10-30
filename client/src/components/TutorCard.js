import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./stylesheets/tutorcard.scss";

const useStyles = makeStyles((theme) => ({
    tutorCard: {
        border: "1px solid black",
        maxWidth: "70%",
        width: "fit-content",
        padding: "30px 20px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        margin: "10px",

        display: "flex",
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    center: {
        justify: "center",
        alignItems: "center",
        height: "100%",
    },
}));

export default function TutorCard({}) {
    const classes = useStyles();

    return (
        <div className={classes.tutorCard}>
            <div className="avatar">
                <Avatar
                    alt="Remy Sharp"
                    src="https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                    className={classes.large}
                />
            </div>
            <div className="user-info">
                <Typography variant="h6">Name</Typography>
                <Typography variant="h6" className="h6">
                    Uni + Course
                </Typography>
                <Typography variant="body">Name</Typography>
            </div>
            <div className="view-profile">
                <Button
                    variant="contained"
                    onClick={() => (window.location = "/tutor/iaNj9sjs")}
                >
                    View Profile
                </Button>
            </div>
        </div>
    );
}

import React from "react";
import TutorCard from "./TutorCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        // background: "green",
        // width: "100%",
        // height: "100%",
        // padding: "20px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    tutors: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
}));

export default function Tutors() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>Tutors</h2>
            <div className={classes.tutors}>
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
            </div>
        </div>
    );
}

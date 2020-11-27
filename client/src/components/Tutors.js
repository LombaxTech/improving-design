import React from "react";
import TutorCard from "./TutorCard";
import Typography from "@material-ui/core/Typography";

import "../styles/tutors.scss";

export default function Tutors() {
    return (
        <div className="tutors-page">
            {/* <Typography variant="h3">Tutors</Typography> */}
            {/* <div className="tutors-cards"> */}
            <div className="tutor-cards">
                <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard />
            </div>
        </div>
    );
}

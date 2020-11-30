import React, { useState, useEffect } from "react";
import TutorCard from "./TutorCard";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import "../styles/tutors.scss";

export default function Tutors() {
    const [tutors, setTutors] = useState([]);
    const [tutorsToDisplay, setTutorsToDisplay] = useState([]);

    async function init() {
        try {
            let tutors = await fetch("http://localhost:3030/custom-tutors");
            tutors = await tutors.json();
            console.log(tutors);
            setTutors(tutors);
            setTutorsToDisplay(tutors);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const FilterTutors = () => (
        <div className="filter-tutors">
            <Select
                value={subject}
                onChange={handleFilterChange}
                className="subject-select"
            >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"math"}>Math</MenuItem>
                <MenuItem value={"physics"}>Physics</MenuItem>
                <MenuItem value={"chemistry"}>Chemistry</MenuItem>
                <MenuItem value={"programming"}>Programming</MenuItem>
            </Select>
            <Button
                variant="contained"
                color="primary"
                className="filter-button"
                size="large"
                onClick={filterSubjects}
            >
                Filter Subject
            </Button>
        </div>
    );

    const [subject, setSubject] = useState("math");
    const handleFilterChange = (e) => setSubject(e.target.value);
    const filterSubjects = () => {
        if (subject === "all") return setTutorsToDisplay(tutors);
        const filteredTutors = tutors.filter((tutor) =>
            tutor.teachingSubjects.includes(subject)
        );
        console.log(filteredTutors);
        setTutorsToDisplay(filteredTutors);
    };

    return (
        <div className="tutors-page">
            {FilterTutors()}
            <div className="tutor-cards">
                {tutorsToDisplay.map((tutor) => (
                    <TutorCard tutor={tutor} />
                ))}
                {/* <TutorCard />
                <TutorCard />
                <TutorCard />
                <TutorCard /> */}
            </div>
        </div>
    );
}

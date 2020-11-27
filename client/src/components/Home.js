import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "@material-ui/core/Button";

import "../App.scss";

const Home = (props) => {
    return (
        <div className="home-page">
            <div className="hero-image"></div>
            <div className="view-tutors">
                <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                    size="large"
                    className="view-tutors-button"
                    onClick={() => (window.location = "/tutors")}
                >
                    View Our Tutors!
                </Button>
            </div>
        </div>
    );
};

export default Home;

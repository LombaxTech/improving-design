import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../App.scss";

const Home = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [timeInterval, setTimeInterval] = useState(60);

    return (
        <div>
            <h1>Home Pages</h1>
            <div>
                <DatePicker
                    className="my-datepicker"
                    timeIntervals={timeInterval}
                    selected={selectedDate}
                    onChange={(date) => {
                        setSelectedDate(date);
                    }}
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mm aa"
                />
            </div>
        </div>
    );
};

export default Home;

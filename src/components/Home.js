import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Home = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState();
    const [timeInterval, setTimeInterval] = useState(60);

    return (
        <div>
            <h1>Home Pages</h1>
            <DatePicker
                timeIntervals={timeInterval}
                selected={selectedDate}
                onChange={(date) => {
                    setSelectedDate(date);
                }}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        </div>
    );
};

export default Home;

import React from "react";
import DatePicker from "react-datepicker";

export default function TutorPage(props) {
    // console.log(props);
    
    const [startDate, setStartDate] = React.useState(new Date());

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </div>
    );
}

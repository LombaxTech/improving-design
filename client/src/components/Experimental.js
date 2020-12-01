import React, { useState } from "react";
import { DatePicker, TimePicker } from "@material-ui/pickers";
import { Modal, Button } from "react-bootstrap";

export default function Experimental() {
    const handleDateChange = (date) => {
        console.log(date);
    };
    const handleTimeChange = (time) => {
        console.log(time);
    };
    const today = new Date();
    const getDateAfterNDays = (n) => {
        return new Date(new Date().getTime() + n * 24 * 60 * 60 * 1000);
    };
    function roundMinutes(date) {
        date.setHours(date.getHours() + Math.round(date.getMinutes() / 60));
        date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

        return date;
    }

    const [show, setShow] = useState(false);
    const TestModal = () => (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Body>
                <h1>modal1</h1>
                <button onClick={() => setShow2(true)}>
                    Open second modal
                </button>
            </Modal.Body>
        </Modal>
    );

    const [show2, setShow2] = useState(false);
    const TestModal2 = () => (
        <Modal show={show2} onHide={() => setShow2(false)} centered>
            <Modal.Body>
                <h1>Modal 2</h1>
                <button>This wont do anything</button>
            </Modal.Body>
        </Modal>
    );

    return (
        <div>
            <h1>date picker</h1>
            <DatePicker
                onChange={handleDateChange}
                disablePast={true}
                maxDate={getDateAfterNDays(6)}
                emptyLabel="hello"
            />

            <TimePicker
                minutesStep={30}
                value={roundMinutes(new Date())}
                onChange={handleTimeChange}
            />
            <button onClick={() => setShow(true)}>open modal</button>
            {TestModal()}
            {TestModal2()}
        </div>
    );
}

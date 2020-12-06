import React, { useState, useEffect } from "react";
import "../styles/tutorpage.scss";
import client from "../feathers.js";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DatePicker, TimePicker, DateTimePicker } from "@material-ui/pickers";

import { Modal } from "react-bootstrap";

export default function TutorPage({ match }) {
    const usersService = client.service("user");
    const bookingService = client.service("bookings");
    const [user, setUser] = useState({});
    const [tutor, setTutor] = useState({});

    async function init() {
        try {
            let user = await client.authenticate();
            console.log(user.user);
            setUser(user.user);

            let tutor = await usersService.get(match.params.tutorId);
            console.log(tutor);
            setTutor(tutor);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        init();
    }, []);

    const [show, setShow] = useState(false);
    const BookingModal = () => {
        const [date, setDate] = useState(new Date());
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState(false);

        const handleDateChange = (data) => {
            console.log(data);
            setDate(data);
        };

        const bookLesson = async () => {
            try {
                setLoading(true);
                let result = await bookingService.create({
                    tutor: tutor._id,
                    student: user._id,
                    date,
                });
                console.log(result);
                setSuccess(true);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        return (
            <Modal show={show} onHide={() => setShow(false)} centered>
                <Modal.Body className="booking-modal-body">
                    {loading && <CircularProgress />}
                    {!loading && (
                        <div>
                            <Typography
                                variant="h4"
                                className="booking-modal-title"
                            >
                                Book Lesson with Brandon
                            </Typography>
                            <div className="date-time">
                                {/* <DatePicker className="booking-date-picker"
                            onChange={handleDateChange}
                         />
                        <TimePicker className="booking-time-picker" /> */}
                                <DateTimePicker
                                    onChange={handleDateChange}
                                    minutesStep={60}
                                    disablePast={true}
                                    value={date}
                                />
                            </div>
                            <div className="booking-button">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth={true}
                                    onClick={bookLesson}
                                >
                                    Book Lesson
                                </Button>
                            </div>
                            <div className="success-or-error">
                                <Alert
                                    severity="success"
                                    style={{
                                        display: !success ? "none" : "",
                                        marginTop: "15px",
                                    }}
                                >
                                    Your Booking has been Successful!
                                </Alert>
                            </div>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        );
    };

    return (
        <div className="tutorpage">
            <div className="about-tutor">
                <div className="pic-name">
                    <div className="name-course">
                        <Typography variant="h4">Buakaw</Typography>
                        <Typography variant="h6" className="h6">
                            University of Thailand - Sports Science BSc
                        </Typography>
                    </div>
                    <Avatar
                        src="https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                        className="profile-pic"
                    />
                </div>
                <div className="about-me">
                    <Typography variant="h5" className="title">
                        About Me
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Recusandae aliquam doloribus fugit ipsam cumque
                        voluptatem soluta expedita, reprehenderit similique
                        nihil obcaecati velit cupiditate error temporibus
                        tempora esse voluptatibus officia vero unde. Nostrum
                        animi rerum dolore magni ab illum omnis ducimus fugiat
                        reprehenderit sequi repellendus voluptatibus, quae sed
                        cumque quasi laborum.
                    </Typography>
                </div>
            </div>
            <div className="contact-tutor">
                <Typography variant="h4">Contact Buakaw</Typography>
                <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                    size="large"
                    className="send-message"
                >
                    Send Message
                </Button>
                <Button
                    variant="contained"
                    fullWidth={true}
                    color="primary"
                    size="large"
                    className="book-lesson"
                    onClick={() => setShow(true)}
                >
                    Book Lesson
                </Button>
                <Button
                    variant="contained"
                    fullWidth={true}
                    color="secondary"
                    size="large"
                    className="view-other-tutors"
                    onClick={() => (window.location = `/tutors`)}
                >
                    View Other Tutors
                </Button>
            </div>
            {BookingModal()}
        </div>
    );
}

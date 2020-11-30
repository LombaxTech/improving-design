import React from "react";
import "../styles/tutorpage.scss";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function TutorPage(props) {
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
        </div>
    );
}

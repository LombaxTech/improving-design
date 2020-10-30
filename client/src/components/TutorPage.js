import React from "react";
import "./stylesheets/tutorpage.scss";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

export default function TutorPage(props) {
    return (
        <div className="tutorpage">
            <div className="about-tutor">
                <div className="pic-name">
                    <div className="profile-pic">
                        <Avatar
                            alt="Remy Sharp"
                            src="https://boxemag.com/media/zoo/images/buakka_f07c997111fe349cfb98ea94dc73e077.jpg"
                            style={{ width: "75px", height: "75px" }}
                        />
                    </div>
                    <div className="name-course">
                        <Typography variant="h6">Buakaw</Typography>
                        <Typography variant="h6" className="h6">
                            University of Thailand - Sports Science BSc
                        </Typography>
                    </div>
                </div>
                <div className="about-me">
                    <Typography variant="h6">About Me</Typography>
                    <Typography variant="body">
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
                <Typography variant="h6">Contact Buakaw</Typography>
                <Button
                    variant="contained"
                    fullWidth={true}
                    className="send-message"
                >
                    Send Message
                </Button>
                <Link href="/tutors">View Other Tutors</Link>
            </div>
        </div>
    );
}

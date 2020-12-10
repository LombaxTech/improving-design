import React, { useState, useEffect } from "react";
import client from "../feathers";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import "../styles/bookings.scss";

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export default function Bookings({ match }) {
    const [bookings, setBookings] = useState([]);
    const [user, setUser] = useState({});

    async function init() {
        try {
            let bookings = await fetch(
                `http://localhost:3030/custom-bookings/${match.params.userId}`
            );
            bookings = await bookings.json();
            bookings = bookings.map((booking) => ({
                ...booking,
                date: new Date(booking.date),
            }));
            console.log(bookings);
            setBookings(bookings);

            let user = await client.authenticate();
            user = user.user;
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const Booking = ({ booking }) => (
        <div className="booking">
            <div className="tutor-details">
                <Avatar
                    src={booking.tutor.profilePictureId}
                    className="profile-pic"
                />
                <Typography variant="h6" className="tutor-name">
                    Tutor: {booking.tutor.name}
                </Typography>
            </div>

            <div className="booking-time">
                <Typography variant="h6">
                    {booking.date.getHours() + 1}:00 {""}
                    {days[booking.date.getDay()]} {booking.date.getDate()}/
                    {booking.date.getMonth() + 1}
                </Typography>
            </div>
        </div>
    );

    return (
        <div className="bookings-page">
            <div className="page-title">
                <Typography variant="h4">Bookings</Typography>
                {bookings.map((booking) => (
                    <Booking booking={booking} />
                ))}
            </div>
        </div>
    );
}

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

import "../App.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    async function init() {
        try {
            let result = await client.authenticate();
            setUser(result.user);
            setLoggedIn(true);
            console.log(result.user);
        } catch (err) {
            console.log(err);
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => setAnchorEl(null);
    const handleProfileMenuOpen = (e) => setAnchorEl(e.currentTarget);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem
                onClick={async () => {
                    window.location = "/profile";
                }}
            >
                Profile
            </MenuItem>
            <MenuItem
                onClick={async () => {
                    await client.logout();
                    window.location = "/";
                }}
            >
                Sign Out
            </MenuItem>
        </Menu>
    );

    const LoggedOutLinks = () => (
        <div>
            <Button
                color="inherit"
                onClick={() => (window.location = `/tutors`)}
            >
                Tutors
            </Button>
            <Button
                color="inherit"
                onClick={() => (window.location = `/signup`)}
            >
                Sign Up
            </Button>
            <Button
                color="inherint"
                onClick={() => (window.location = `/login`)}
            >
                Login
            </Button>
        </div>
    );
    const TutorLinks = () => (
        <div>
            <Button
                color="inherit"
                onClick={() => (window.location = `/bookings/${user._id}`)}
            >
                Bookings
            </Button>
            <Button
                color="inherit"
                onClick={() => (window.location = `/chats`)}
            >
                Messages
            </Button>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileMenuOpen}
            >
                <Avatar
                    alt="Sheldon Cooper"
                    src={user.profilePictureId}
                    style={{ alignSelf: "center" }}
                />
            </IconButton>
        </div>
    );
    const StudentLinks = () => (
        <div>
            <Button
                color="inherit"
                onClick={() => (window.location = `/tutors`)}
            >
                Tutors
            </Button>
            <Button
                color="inherit"
                onClick={() => (window.location = `/bookings/${user._id}`)}
            >
                Lessons
            </Button>
            <Button
                color="inherit"
                onClick={() => (window.location = `/chats`)}
            >
                Messages
            </Button>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileMenuOpen}
            >
                <Avatar
                    alt="Sheldon Cooper"
                    src={user.profilePictureId}
                    style={{ alignSelf: "center" }}
                />
            </IconButton>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={`${classes.title} pageTitle`}
                        onClick={() => (window.location = "/")}
                    >
                        RK TUTORS
                    </Typography>
                    <div>
                        {!loggedIn && LoggedOutLinks()}
                        {loggedIn && user.role === 1 && TutorLinks()}
                        {loggedIn && user.role === 0 && StudentLinks()}
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}

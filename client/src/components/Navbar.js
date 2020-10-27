import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

    return (
        <div className={classes.root}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        RK TUTORS
                    </Typography>
                    <div>
                        <Button
                            color="inherit"
                            onClick={() => (window.location = `/signup`)}
                        >
                            Sign Up
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => (window.location = `/login`)}
                        >
                            Login
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

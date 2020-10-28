import React, { useState, useEffect } from "react";
import client from "../feathers";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { DropzoneArea } from "material-ui-dropzone";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
                RK TUTORS
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    dropzone: {
        height: "150px",
        width: "150px",
        minHeight: "0px !important",
        marginBottom: theme.spacing(3),
    },
}));

export default function Profile() {
    const classes = useStyles();

    const userService = client.service("user");
    const [user, setUser] = useState({});
    async function init() {
        let user = await client.authenticate();
        user = user.user;
        console.log(user);
        setUser(user);
        setEmail(user.email);
        setName(user.name);
    }

    useEffect(() => {
        init();
    }, []);

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [file, setFile] = useState({});

    const updateEmailValue = (e) => setEmail(e.target.value);
    const updatePasswordValue = (e) => setPassword(e.target.value);
    const updateNameValue = (e) => setName(e.target.value);

    const update = async (e) => {
        e.preventDefault();
        let valuesToChange = {};
        if (name !== "") valuesToChange = { ...valuesToChange, name };
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "testpreset");
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar
                    className={classes.avatar}
                    alt="..."
                    src="https://www.gstatic.com/tv/thumb/persons/877857/877857_v9_aa.jpg"
                />
                <Typography component="h1" variant="h5">
                    {user.name}
                </Typography>
                <form className={classes.form} noValidate onSubmit={update}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Name"
                                value={name}
                                onChange={updateNameValue}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                value={password}
                                onChange={updatePasswordValue}
                                type="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DropzoneArea
                                filesLimit={1}
                                showPreviews={true}
                                showPreviewsInDropzone={false}
                                dropzoneClass={classes.dropzone}
                                onChange={(file) => setFile(file[0])}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Update Profile
                    </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import TutorPage from "./components/TutorPage";

import "./App.scss";

export default function App() {
    console.log("can you see this");

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/tutor/:tutorId" component={TutorPage} />
                <Route path="/profile" exact component={Profile} />
            </Switch>
        </Router>
    );
}

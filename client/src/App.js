import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Tutors from "./components/Tutors";
import TutorPage from "./components/TutorPage";
import Chats from "./components/Chats";
import Chatroom from "./components/Chatroom";

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
                <Route path="/tutors" exact component={Tutors} />
                <Route path="/chats" exact component={Chats} />
                <Route path="/chat/:partnerId" component={Chatroom} />
            </Switch>
        </Router>
    );
}

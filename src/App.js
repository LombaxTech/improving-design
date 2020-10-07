import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import TutorPage from "./components/TutorPage";

export default function App() {
    console.log("can you see this");

    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/tutor/:tutorId" component={TutorPage} />
            </Switch>
        </Router>
    );
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

// import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#673ab7",
        },
        secondary: {
            main: "#ffc400",
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <App />
            </MuiPickersUtilsProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

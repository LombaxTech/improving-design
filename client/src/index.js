import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

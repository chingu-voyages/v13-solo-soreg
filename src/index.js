import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/shared/header/Header";
import Landing from "./components/landing/Landing";

const theme = {
    primary: {
        grey: "#5D5C61",
        green: "#379683",
        lightblue: "#7395AE",
        darkblue: "#557a95",
        brown: "#B1A296"
    },
    header: {
        fg: "#fff",
        modalCLoseIcon: "#656565"
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Header />
        <Landing />
    </ThemeProvider>,
    document.querySelector("#app")
);

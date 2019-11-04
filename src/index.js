import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/shared/header/Header";

const theme = {
    primary: {
        grey: "#5D5C61",
        green: "#379683",
        lightblue: "#7395AE",
        darkblue: "#557a95",
        brown: "#B1A296"
    },
    header: {
        fg: "#fff"
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>,
    document.querySelector("#app")
);

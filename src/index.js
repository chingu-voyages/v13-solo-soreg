import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/shared/header/Header";

const theme = {
    header: {
        bg: "#557a95"
    }
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Header />
    </ThemeProvider>,
    document.querySelector("#app")
);

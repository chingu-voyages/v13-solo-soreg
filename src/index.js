import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import theme from "./themes";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <div>App</div>
    </ThemeProvider>,
    document.querySelector("#app")
);

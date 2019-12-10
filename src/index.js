import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import { ThemeProvider } from "styled-components";
import Router from "./router";
import reducer from "./store/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    </Provider>,
    document.querySelector("#app")
);

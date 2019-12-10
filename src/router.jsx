import React, { Component } from "react";
import ContentWrapper from "components/ContentWrapper.jsx";
import Landing from "components/landing/Landing";
import Diary from "components/diary/Index";
import AuthHelper from "components/auth/AuthHelper";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Router extends Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthHelper();

        this.state = {
            auth: this.Auth.getCurrentUser()
        };
    }

    render() {
        const { auth } = this.state;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <ContentWrapper
                            children={
                                auth && auth.loggedIn ? (
                                    <Diary auth={auth} />
                                ) : (
                                    <Landing auth={auth} />
                                )
                            }
                            auth={auth}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

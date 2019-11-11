import React from "react";
import Diary from "./diary/Index";
import Header from "./shared/header/Header";
import AuthHelper from "./auth/AuthHelper";
import styled from "styled-components";

const Wrapper = styled.div`
    justify-content: center;
    height: calc(100vh - 80px);
    width: 100%;
`;

export default class ContentWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.Auth = new AuthHelper();

        this.state = {
            auth: this.Auth.getCurrentUser()
        };
    }

    render() {
        const { auth } = this.state;
        const { children } = this.props;

        const childrenWithProps = React.Children.map(children, child =>
            React.cloneElement(child, { auth })
        );

        return (
            <div>
                <Header auth={auth} />
                <Wrapper>
                    {/* Temp - will be handled dynamically in a later update */}
                    {auth && auth.loggedIn ? <Diary /> : childrenWithProps}
                </Wrapper>
            </div>
        );
    }
}

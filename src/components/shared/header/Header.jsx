import React, { Component } from "react";
import { Wrapper, Logo, LoginSignupButton, Container } from "./styles";

export default class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <Logo>Online Personal Diary</Logo>
                    <LoginSignupButton>Login</LoginSignupButton>
                </Container>
            </Wrapper>
        );
    }
}

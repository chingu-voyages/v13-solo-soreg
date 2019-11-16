import React, { Component } from "react";
import { Wrapper, Logo, LoginSignupButton, Container } from "./styles";
import LoginModal from "./LoginModal";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.doSignOut = this.doSignOut.bind(this);
    }

    openModal() {
        this.setState({
            modalOpen: true
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false
        });
    }

    doSignOut() {
        localStorage.removeItem("personaldiary_token");

        window.location.reload();
    }

    render() {
        const { modalOpen } = this.state;
        const { auth } = this.props;

        return (
            <Wrapper>
                <Container>
                    <Logo>Online Personal Diary</Logo>
                    {auth && auth.loggedIn ? (
                        <LoginSignupButton onClick={this.doSignOut}>
                            Sign out
                        </LoginSignupButton>
                    ) : (
                        <LoginSignupButton onClick={this.openModal}>
                            Log in
                        </LoginSignupButton>
                    )}
                </Container>
                <LoginModal active={modalOpen} closeModal={this.closeModal} />
            </Wrapper>
        );
    }
}

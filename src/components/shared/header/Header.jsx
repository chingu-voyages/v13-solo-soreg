import React, { Component } from "react";
import Modal from "./LoginModal";
import { Wrapper, Logo, LoginSignupButton, Container } from "./styles";
import LoginModal from "./LoginModal";

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: true
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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

    render() {
        const { modalOpen } = this.state;

        return (
            <Wrapper>
                <Container>
                    <Logo>Online Personal Diary</Logo>
                    <LoginSignupButton onClick={this.openModal}>
                        Log in
                    </LoginSignupButton>
                </Container>
                <LoginModal active={modalOpen} closeModal={this.closeModal} />
            </Wrapper>
        );
    }
}

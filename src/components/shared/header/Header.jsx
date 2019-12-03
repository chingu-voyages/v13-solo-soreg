import React, { Component } from "react";
import { connect } from "react-redux";
import { renderModal } from "store/actions";
import LoginModal from "./LoginModal";
import { Wrapper, Logo, LoginSignupButton, Container } from "./styles";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.doSignOut = this.doSignOut.bind(this);
    }

    openModal() {
        const { renderModal } = this.props;
        renderModal({
            ModalComponent: () => <LoginModal />
        });
    }

    doSignOut() {
        localStorage.removeItem("personaldiary_token");

        window.location.reload();
    }

    render() {
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
            </Wrapper>
        );
    }
}

const mapDispatchToProps = {
    renderModal
};

export default connect(null, mapDispatchToProps)(Header);

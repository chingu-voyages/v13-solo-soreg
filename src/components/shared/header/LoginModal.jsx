import React, { Component } from "react";
import {
    Overlay,
    ModalWrapper,
    ModalContainer,
    ModalHeadline,
    ModalForm,
    ModalInput,
    ModalLoginButton,
    ModalCloseIcon
} from "./styles";

export default class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        const { email, password } = this.state;
        const { active, closeModal } = this.props;

        return (
            <ModalContainer active={active}>
                <Overlay onClick={closeModal} />
                <ModalWrapper>
                    <ModalCloseIcon onClick={closeModal} />
                    <ModalHeadline>Login</ModalHeadline>
                    <ModalForm onSubmit={this.onSubmit}>
                        <ModalInput
                            name="email"
                            value={email}
                            type="text"
                            placeholder="email"
                            onChange={this.onInputChange}
                            required
                        />
                        <ModalInput
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={this.onInputChange}
                            required
                        />
                        <ModalLoginButton type="submit">Login</ModalLoginButton>
                    </ModalForm>
                </ModalWrapper>
            </ModalContainer>
        );
    }
}

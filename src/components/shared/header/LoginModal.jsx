import React, { Component } from "react";
import endpoints from "components/shared/endpoints";
import { Post } from "components/shared/helpers/fetch";
import {
    ModalHeadline,
    ModalForm,
    ModalInput,
    ModalLoginButton,
    ErrorMessage
} from "./styles";

export default class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: null
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
        const { email, password } = this.state;

        const url = endpoints.users.login;
        const body = {
            email,
            password
        };

        Post(url, body)
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(json => {
                // Set or clear error
                const error = json.error || null;
                this.setState({
                    error
                });

                if (!json.error) {
                    localStorage.setItem("personaldiary_token", json);
                    window.location.reload();
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { email, password, error } = this.state;

        return (
            <>
                <ModalHeadline>Login</ModalHeadline>
                <ModalForm onSubmit={this.onSubmit}>
                    <ModalInput
                        name="email"
                        value={email}
                        type="text"
                        placeholder="email"
                        onChange={this.onInputChange}
                        required
                        autoComplete="login_email"
                    />
                    <ModalInput
                        name="password"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={this.onInputChange}
                        required
                        autoComplete="login_password"
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <ModalLoginButton type="submit">Login</ModalLoginButton>
                </ModalForm>
            </>
        );
    }
}

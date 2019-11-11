import React from "react";
import { Post } from "../shared/helpers/fetch";
import styled from "styled-components";

// Signup
const Form = styled.form`
    border: 1px solid #ccc;
    padding: 20px 30px;
    width: 250px;
`;

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h3`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Input = styled.input`
    padding: 5px 5px;
    margin-bottom: 15px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Submit = styled.button`
    display: block;
    margin: 15px auto 0;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 7px 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
    background: ${props => props.theme.primary.darkblue};
    color: white;
`;

const ErrorMessage = styled.div`
    text-align: center;
    color: #ca3535;
    font-style: italic;
    font-weight: bold;
    margin-top: 10px;
`;

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
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
        const { name, email, password } = this.state;

        const url = "/users/register";
        const body = {
            name,
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
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { error } = this.state;

        console.log(error);

        return (
            <Form onSubmit={this.onSubmit}>
                <Title>Sign up</Title>
                <InputsWrapper>
                    <Input
                        name="name"
                        type="text"
                        placeholder="name"
                        required
                        onChange={this.onInputChange}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="email"
                        required
                        onChange={this.onInputChange}
                    />
                    <Input
                        name="password"
                        type="password"
                        placeholder="password"
                        required
                        onChange={this.onInputChange}
                    />
                </InputsWrapper>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <Submit>Sign up</Submit>
            </Form>
        );
    }
}

export default Signup;

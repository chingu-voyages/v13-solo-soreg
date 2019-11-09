import React from "react";
import { Post } from "../shared/helpers/fetch";
import styled from "styled-components";

// Signup
const Form = styled.form`
    border: 1px solid #ccc;
    padding: 20px 30px;
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

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
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
                console.log(json);
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
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
                <Submit>Sign up</Submit>
            </Form>
        );
    }
}

export default Signup;

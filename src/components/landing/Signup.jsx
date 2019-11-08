import React from "react";
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

const onSubmit = e => {
    e.preventDefault();
};

const Signup = () => {
    return (
        <Form onSubmit={onSubmit}>
            <Title>Sign up</Title>
            <InputsWrapper>
                <Input name="name" type="text" placeholder="name" required />
                <Input name="email" type="email" placeholder="email" required />
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    required
                />
            </InputsWrapper>
            <Submit>Sign up</Submit>
        </Form>
    );
};

export default Signup;

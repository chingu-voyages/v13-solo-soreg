import styled from "styled-components";
import { breakpoints } from "../../../frontend-config";

// Header
export const Wrapper = styled.div`
    height: 60px;
    background: #52869c;
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${breakpoints("maxWidth")};
    margin: 0 auto;
    height: 100%;
`;

export const Logo = styled.div`
    font-size: 30px;
    color: ${props => props.theme.header.fg};
`;

export const LoginSignupButton = styled.button`
    top: 50%;
    right: 0;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 7px 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 15px;
    background: ${props => props.theme.primary.brown};
    color: ${props => props.theme.header.fg};
    transition: all ease 0.3s;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 4px 5px 3px 0 rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.2);
    }
`;

// Login Modal
export const ModalWrapper = styled.div`
    padding: 20px 0 10px;
`;

export const ModalHeadline = styled.div`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 10px;
`;

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalInput = styled.input`
    margin-bottom: 15px;
    padding: 3px 5px;
    width: 230px;
`;

export const ModalLoginButton = styled(LoginSignupButton)`
    position: relative;
    background: ${props => props.theme.primary.darkblue};

    &,
    &:hover,
    &:active {
        transform: translate(0);
        box-shadow: none;
    }
`;

export const ErrorMessage = styled.div`
    text-align: center;
    color: #ca3535;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 10px;
`;

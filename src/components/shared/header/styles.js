import styled from "styled-components";
import { breakpoints } from "../../../frontend-config";

// Header
export const Wrapper = styled.div`
    height: 80px;
    background: ${props => props.theme.primary.darkblue};
`;

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: ${breakpoints("maxWidth")};
    margin: 0 auto;
    height: 100%;
`;

export const Logo = styled.div`
    font-size: 30px;
    color: ${props => props.theme.header.fg};
`;

export const LoginSignupButton = styled.button`
    position: absolute;
    transform: translateY(-50%);
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
    box-shadow: 2px 3px 0 0 rgba(0, 0, 0, 0.3);

    &:hover {
        transform: translateY(calc(-50% - 2px));
        box-shadow: 4px 5px 3px 0 rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: translateY(calc(-50% + 1px));
        box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.2);
    }
`;

// Modal
export const ModalContainer = styled.div`
    transition: all ease 0.5s;
    ${props =>
        props.active
            ? `opacity: 1;
        visibility: visible;`
            : `
        opacity: 0;
        visibility: hidden;
    `}
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
    position: fixed;
    transform: translate(50%, calc(-50% + 40px));
    top: 50%;
    right: 50%;
    width: 90vw;
    max-height: calc(80vh - 80px);
    background: #fff;
    max-width: 400px;
    padding: 5px 0 20px;
`;

export const ModalCloseIcon = styled.div`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;

    &:before,
    &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 50%;
        height: 2px;
        width: 20px;
        background: ${props => props.theme.header.modalCLoseIcon};
    }

    &:before {
        transform: translate(50%, -50%) rotate(45deg);
    }

    &:after {
        transform: translate(50%, -50%) rotate(-45deg);
    }
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

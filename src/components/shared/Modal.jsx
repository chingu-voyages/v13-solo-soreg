import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const ModalContainer = styled.div`
    transition: all ease 0.5s;
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

const Modal = () => {
    const ModalComponent = useSelector(state => state.ModalComponent);

    return ModalComponent ? (
        <ModalContainer>
            <Overlay />
            <ModalWrapper>
                <ModalCloseIcon />
                <ModalComponent />
            </ModalWrapper>
        </ModalContainer>
    ) : null;
};

export default Modal;

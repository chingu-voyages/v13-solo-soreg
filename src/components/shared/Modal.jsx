import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
    const ModalComponent = useSelector(state => state.ModalComponent);

    return ModalComponent ? (
        <div>
            <ModalComponent />
        </div>
    ) : null;
};

export default Modal;

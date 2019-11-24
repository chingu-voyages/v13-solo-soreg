import { RENDER_MODAL, CLEAR_MODAL } from "./reducer";

export function renderModal({ ModalComponent }) {
    return {
        type: RENDER_MODAL,
        ModalComponent
    };
}

export function clearModal() {
    return {
        type: CLEAR_MODAL
    };
}

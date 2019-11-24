import { RENDER_MODAL } from "./reducer";

export function renderModal({ ModalComponent }) {
    return {
        type: RENDER_MODAL,
        ModalComponent
    };
}

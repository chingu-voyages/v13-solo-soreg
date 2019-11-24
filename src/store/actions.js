import { RENDER_MODAL } from "./reducer";

export const renderModal = content => {
    return {
        type: RENDER_MODAL,
        modalContent: content
    };
};

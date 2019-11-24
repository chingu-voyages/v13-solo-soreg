export const initialState = {
    ModalComponent: null
};

export const RENDER_MODAL = "RENDER_MODAL";
export const actions = {};

actions[RENDER_MODAL] = (state, action) => ({
    ...state,
    ModalComponent: action.ModalComponent
});

export default function reducer(state = initialState, action) {
    const handler = actions[action.type];
    if (handler) {
        return handler(state, action);
    }
    return state;
}

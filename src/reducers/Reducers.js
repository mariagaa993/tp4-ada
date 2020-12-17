export const INIT_DATA = "Inicializar";

export const reducer = (state, action) => {
    switch (action.type) {
        case INIT_DATA:
            return action.payload;
        default:
            return state;
    }
}

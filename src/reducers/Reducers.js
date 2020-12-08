export const INIT_DATA = "Inicializar";

export const ReducerMovies = (state, action) => {
    switch (action.type) {
        case INIT_DATA:
            return action.payload;
        default:
            return state;
    }
}

export const ReducerSeries = (state, action) => {
    switch (action.type) {
        case INIT_DATA:
            return action.payload;
        default:
            return state;
    }
}

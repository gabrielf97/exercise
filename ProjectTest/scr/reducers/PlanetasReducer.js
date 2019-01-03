const INICIAL_STATE = {
    todos: [],
    selecionado: null,
}

const PlanetasReducer = (state = INICIAL_STATE, action) => {

    switch (action.type) {
        case 'OBTER_PLANETAS':
            return { ...state, todos: action.payload.data.results };
        case 'OBTER_PLANETA':
            return { ...state, selecionado: action.payload.data };
        case 'SET_PLANETA':
            return { ...state, selecionado: action.payload };
        default:
            return state;
    }
};

export default PlanetasReducer;
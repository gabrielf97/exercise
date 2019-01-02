const INICIAL_STATE = {
    todos: [],
    selected: null,
}

const PlanetasReducer = (state = INICIAL_STATE, action) => {
    
    switch (action.type) {
        case 'OBTER_PLANETAS':
            return { ...state, todos: action.payload.data.results };  
        case 'OBTER_PLANETA':
            return { ...state, selected: action.payload.data }; 
        default:
            return state;
    }        
};

export default PlanetasReducer;
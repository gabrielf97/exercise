const PlanetasReducer = (state = [], action) => {
    
    switch (action.type) {
        case 'OBTER_PLANETAS':
        return { ...state, todos: action.payload.data.results };  
    }
    
    return state;
};

export default PlanetasReducer;
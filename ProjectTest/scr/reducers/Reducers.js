import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PlanetasReducer from './PlanetasReducer'

const Reducers = combineReducers({
    Login:LoginReducer,
    Planetas: PlanetasReducer
});

export default Reducers
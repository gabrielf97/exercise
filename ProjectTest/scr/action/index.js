import axios from 'axios'

export const obterPlanetas = () => {

    const request = axios.get('https://swapi.co/api/planets/');
   
    return {
        type:'OBTER_PLANETAS',
        payload: request
    };
};

export const obterPlaneta = () => {
    const request = axios.get('https://swapi.co/api/planets/2/');

    return {
        type:'OBTER_PLANETA',
        payload: request
    };
};
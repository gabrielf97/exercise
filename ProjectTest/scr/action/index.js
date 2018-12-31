import axios from 'axios'

export const obterPlanetas = () => {

    const request = axios.get('https://swapi.co/api/planets/');
   
    return {
        type:'OBTER_PLANETAS',
        payload: request
    };
};
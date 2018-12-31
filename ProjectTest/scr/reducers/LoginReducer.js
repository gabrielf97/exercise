const initialState = {
    email:'gabriel.marinho@tron.com.br',
    passowrd:''
};

const LoginReducer = (state = [], action) => {

    if(state.length == 0){
        return initialState;
    }else
    return state;
};

export default LoginReducer;
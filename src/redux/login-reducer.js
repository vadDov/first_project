
const SUBMITE_LOGIN_FORM = 'SUBMITE_LOGIN_FORM';

let inicialState = {
    login: null,
    password: null,
    remember: false
}

const loginReducer = (state = inicialState, action) => {
    switch(action.type){
        case SUBMITE_LOGIN_FORM:
            return{
                ...state,
                login: action.data.login,
                password: action.data.password,
                remember: action.data.remember
            }
        default:
            return state
    }
}

export const submitLoginForm = (data) => {
    return{
        type: 'SUBMITE_LOGIN_FORM',
        data
    }
}

export default loginReducer;
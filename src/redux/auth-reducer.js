import { usersAPI } from "../API/app";

const SET_AUTH_USER = 'SET_AUTH_USER';



let inicialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: 
            return {
                ...state,
                ... action,
                isAuth: true
            }

        default:
            return state;
    }
}


const setAuthUser = (id, login, email) => {
    return {
        type: 'SET_AUTH_USER',
        id,
        login,
        email,
    }
}

export const autorization = () => {
    return (dispatch) => {
        usersAPI.getAuth().then( data => {
            let { id, login, email } = data.data
            dispatch(setAuthUser(id, login, email));
        } )
    }
}

export default authReducer;
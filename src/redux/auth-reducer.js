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


export const setAuthUser = (id, login, email, isAuth) => {
    return {
        type: 'SET_AUTH_USER',
        id,
        login,
        email,
        isAuth
    }
}

export default authReducer;
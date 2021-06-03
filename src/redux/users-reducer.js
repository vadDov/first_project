const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';

let inicialState = {
    users: []
}

const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if(user.id === action.userId) {
                        return { ...user, subscription: true }
                    }
                    return user;
                } )
            }
            
        case UNSUBSCRIBE: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if(user.id === action.userId) {
                        return { ...user, subscription: false }
                    }
                    return user;
                } )
            }
            
        case SET_USERS:
            return {
                ...state,
                users: [ ...action.users ]
            }

        default:
            return state;
    }
}

export const subscribeAC = (userId) => {
    return {
        type: 'SUBSCRIBE',
        userId
    }
}
export const unsubscribeAC = (userId) => {
    return {
        type: 'UNSUBSCRIBE',
        userId
    }
}
export const setUsersAC = (users) => {
    return {
        type: 'SET_USERS',
        users
    }
}

export default usersReducer;
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';

let inicialState = {
    users: [
        // { id:1, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: true, full_name: 'Vadim D', status: 'I am a boss!', location: { city_name: 'Osipivichi', country: 'Belarus' } },
        // { id:2, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: false, full_name: 'Andrei D', status: 'I am a boss2!', location: { city_name: 'Moscow', country: 'Russia' } },
        // { id:3, photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg', subscription: true, full_name: 'Vlad D', status: 'I am a boss3!', location: { city_name: 'Kiev', country: 'Ukraine' } },
    ]
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
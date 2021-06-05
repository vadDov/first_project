const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let inicialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 100
}

const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SUBSCRIBE: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if(user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                } )
            }
            
        case UNSUBSCRIBE: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if(user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                } )
            }
            
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
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
export const setCurrentPageAC = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
}
export const setUsersTotalCountAC = (totalCount) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        totalCount
    }
}

export default usersReducer;
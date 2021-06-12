import { usersAPI } from "../API/app";

const SUBSCRIBE_TO_USER = 'SUBSCRIBE_TO_USER';
const UNSUBSCRIBE_TO_USER = 'UNSUBSCRIBE_TO_USER';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRES = 'TOOGLE_IS_FOLLOWING_PROGRES';

let inicialState = {
    users: [],
    currentPage: 1,
    totalCount: 0,
    pageSize: 100,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = inicialState, action) => {
    switch (action.type) {
        case SUBSCRIBE_TO_USER: 
            return {
                ...state,
                users: state.users.map( (user) => {
                    if(user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                } )
            }      
        case UNSUBSCRIBE_TO_USER: 
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
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOOGLE_IS_FOLLOWING_PROGRES:
            return {
                ...state,
                followingInProgress: action.isFetching
                                    ? [...state.followingInProgress, action.userId]
                                    : state.followingInProgress.filter( id => id !== action.userId )
            }

        default:
            return state;
    }
}

const subscribeToUser = (userId) => {
    return {
        type: 'SUBSCRIBE_TO_USER',
        userId
    }
}
const unsubscribeToUser = (userId) => {
    return {
        type: 'UNSUBSCRIBE_TO_USER',
        userId
    }
}
const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
}
const setUsersTotalCount = (totalCount) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        totalCount
    }
}
const toogleIsFetching = (isFetching) => {
    return {
        type: 'TOOGLE_IS_FETCHING',
        isFetching
    }
}
const toogleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: 'TOOGLE_IS_FOLLOWING_PROGRES',
        isFetching,
        userId
    }
}

// thunkCreators

export const unsubscribe = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then( data => {
            if(data.resultCode == 0) {
                dispatch(unsubscribeToUser(userId))
            }
            dispatch(toogleIsFollowingProgress(false, userId));
        } )
    }
}
export const subscribe = (userId) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(true, userId));
        usersAPI.follow(userId).then( data => {
            if(data.resultCode == 0) {
                dispatch(subscribeToUser(userId)); 
            }
            dispatch(toogleIsFollowingProgress(false, userId));
        } )
    }
}
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toogleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then( data => {
            dispatch(setUsers(data.items));
            dispatch(toogleIsFetching(false));
            dispatch(setUsersTotalCount(data.totalCount));
        } )
}

export default usersReducer;
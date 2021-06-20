import { usersAPI, userStatusAPI } from "../API/app";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

let inicialState = {
    postData: [
        { id: '1', message: 'Hi, how are you?', likes: '7' },
        { id: '2', message: 'I am Vadim', likes: '15' },
        { id: '3', message: 'Yesterday!', likes: '0' },
        { id: '4', message: 'Yes', likes: '1' },
        { id: '5', message: 'I dont now', likes: '5' },
        { id: '6', message: 'I happy man', likes: '32' },
    ],
    postText: '',
    profile: null,
    userStatus: ''
}

const profileReducer = (state = inicialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: `${+state.postData[state.postData.length - 1].id + 1}`,
                message: state.postText,
                likes: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                postText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                postText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                userStatus: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                userStatus : action.status
            }
        default:
            return state;
    }
}
const updateUserStatus = (status) => {
    return {
        type: 'UPDATE_STATUS',
        status
    }
}
export const addPost = () => {
    return {
        type: 'ADD-POST'
    }
};
export const updatePostText = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: text
    }
};
export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    }
}
export const setUserStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}
export const showUserProfile = (id) => {
    return (dispatch) => {
        let userId = id || 17516
        usersAPI.getUserProfile(userId).then( data => {
            dispatch(setUserProfile(data));
        } )
    }
}
export const getStatus = (userId) => {
    return (dispath) => {
        userStatusAPI.getUserStatus(userId).then( data => {
            dispath(setUserStatus(data))
        } )
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        userStatusAPI.updateUserStatus(status).then( response => {
            if(response.resultCode === 0) {
                dispatch(updateUserStatus(status))
            }
        } )
    }
}

export default profileReducer;
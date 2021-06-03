const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let inicialState = {
    postData: [
        { id: '1', message: 'Hi, how are you?', likes: '7' },
        { id: '2', message: 'I am Vadim', likes: '15' },
        { id: '3', message: 'Yesterday!', likes: '0' },
        { id: '4', message: 'Yes', likes: '1' },
        { id: '5', message: 'I dont now', likes: '5' },
        { id: '6', message: 'I happy man', likes: '32' },
    ],
    postText: ''
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
};
export const updatePostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: text
    }
};

export default profileReducer;
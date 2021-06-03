const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let inicialState = {
    dialogsData: [
        { id: '1', name: 'Vadim' },
        { id: '2', name: 'Andrei' },
        { id: '3', name: 'Ivan' },
        { id: '4', name: 'Egor' },
        { id: '5', name: 'Dima' },
        { id: '6', name: 'Sveta' },
    ],
    messagesData: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'I am Vadim' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Yo!!!' },
    ],
    newMessageText: ''
}

const dialogsReducer = (state = inicialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: `${+state.messagesData[state.messagesData.length - 1].id + 1}`,
                message: state.newMessageText
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addNewMessageCreator = () => {
    return {
        type: 'ADD-NEW-MESSAGE'
    }
}
export const updateMessageTextCreator = (text) => {
    return {
        type: 'UPDATE-MESSAGE-TEXT',
        newText: text
    }
}

export default dialogsReducer;
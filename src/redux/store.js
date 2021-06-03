import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
        _state: {
            profilePage: {
                postData: [
                        { id: '1', message: 'Hi, how are you?', likes: '7' },
                        { id: '2', message: 'I am Vadim', likes: '15' },
                        { id: '3', message: 'Yesterday!', likes: '0' },
                        { id: '4', message: 'Yes', likes: '1' },
                        { id: '5', message: 'I dont now', likes: '5' },
                        { id: '6', message: 'I happy man', likes: '32' },
                ],
                postText: ''
            },
            dialogsPage: {
                dialogsData: [
                    { id: '1', name: 'Vadim' },
                    { id: '2', name: 'Andrei' },
                    { id: '3', name: 'Ivan' },
                    { id: '4', name: 'Egor' },
                    { id: '5', name: 'Dima' },
                    { id: '5', name: 'Sveta' },
                ],
                messagesData: [
                    {id: '1', message: 'Hi' },
                    {id: '2', message: 'I am Vadim' },
                    {id: '3', message: 'Yo' },
                    {id: '4', message: 'Yo!!!' },
                ],
                newMessageText: ''
            },
            sidebar: {

            }
        },
        getState() {
            return this._state;
        },
        subscribe(observer) {
            this.renderDOM = observer;
        },
        renderDOM() {
    
        },
        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this.renderDOM(this._state);
        }
}



window.store = store;


export default store;
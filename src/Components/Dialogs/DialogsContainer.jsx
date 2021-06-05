import React from 'react';
import { connect } from 'react-redux';
import { addNewMessage, updateMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
// let mapDispatchtoProps = (dispatch) => {
//     return {
//         addNewMessage: () => {
//             dispatch(addNewMessageCreator())
//         },
//         updateMessageText: (body) => {
//             dispatch(updateMessageTextCreator(body))
//         }
//     }
// }

let mapDispatchToProps = { addNewMessage, updateMessageText }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
////dialogsPage = { props.state.dialogsPage } dispatch = { props.dispatch }
import React from 'react';
import { connect } from 'react-redux';
import { addNewMessageCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStatetoProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        addNewMessage: () => {
            dispatch(addNewMessageCreator())
        },
        updateMessageText: (body) => {
            dispatch(updateMessageTextCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStatetoProps, mapDispatchtoProps)(Dialogs)

export default DialogsContainer;
////dialogsPage = { props.state.dialogsPage } dispatch = { props.dispatch }
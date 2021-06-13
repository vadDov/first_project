import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addNewMessage, updateMessageText } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
let authRedirectComponent = withAuthRedirect(Dialogs)

let mapDispatchToProps = { addNewMessage, updateMessageText }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent)

export default DialogsContainer;
////dialogsPage = { props.state.dialogsPage } dispatch = { props.dispatch }
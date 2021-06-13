import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
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
export default compose(
    connect(mapStateToProps, { addNewMessage, updateMessageText }),
    withAuthRedirect
)(Dialogs)
////dialogsPage = { props.state.dialogsPage } dispatch = { props.dispatch }
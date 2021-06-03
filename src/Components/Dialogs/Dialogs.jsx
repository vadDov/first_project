import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {

    let dialogsElems = props.dialogsPage.dialogsData.map( elem => <DialogItem name= { elem.name } id= { elem.id } key = { elem.id }/> );

    let messagesElems = props.dialogsPage.messagesData.map( elem => <DialogMessage id= { elem.id } message= { elem.message } key = { elem.id }/> );

    const updateMessageText = (event) => {
        let text = event.target.value;
        props.updateMessageText(text);
    }
    const addNewMesseg = () => {
        props.addNewMessage();
    }
    
    return (
        <div className= { css.dialogsItem }>
            <div className={ css.dialogs }>
                { dialogsElems }
            </div>
            <div className={ css.messages }>
                { messagesElems }
                <div>
                    <textarea onChange = { updateMessageText } value = { props.dialogsPage.newMessageText }></textarea>
                </div>
                <div>
                    <button onClick = { addNewMesseg }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
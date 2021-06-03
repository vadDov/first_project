import React from 'react';
import css from './../Dialogs.module.css';

const DialogMessage = (props) => {
    return(
        <div className={ css.message }> { props.message } </div>
    );
}

export default DialogMessage;
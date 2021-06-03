import React from 'react';
import css from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <NavLink className={ css.dialog } to={ `/dialogs/${props.id}` }> { props.name } </NavLink>
    );
}

export default DialogItem;
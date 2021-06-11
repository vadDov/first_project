import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import userPhoto from '../../assets/images/user_photo.png'

function Header(props) {
    return(
        <header className= { css.header }>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"></img>
            <div className = { css.login_block }>
                { props.data.isAuth ?
                <div className = { css.author }>
                    <span className = { css.login }>{ props.data.login }</span>
                    <img className = { css.user_photo } src = { userPhoto } ></img>
                </div>
                    :
                    <NavLink to = '/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
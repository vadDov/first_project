import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navibar.module.css';

function Navbar() {
    return(
        <nav className= { css.nav }>
            <NavLink className= { css.item } activeClassName= { css.active } to= "/profile">Profile</NavLink>
            <NavLink className= { css.item } activeClassName= { css.active } to= "/dialogs">Messages</NavLink>
            <NavLink className= { css.item } activeClassName= { css.active } to="/musics">Musics</NavLink>
            <NavLink className= { css.item } activeClassName= { css.active } to="/news">News</NavLink>
        </nav>
    );
}
export default Navbar;
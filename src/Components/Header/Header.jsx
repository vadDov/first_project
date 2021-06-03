import React from 'react';
import css from './Header.module.css';

function Header() {
    return(
        <header className= { css.header }>
            <img src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"></img>
        </header>
    );
}

export default Header;
import React from 'react';
import preloader from '../../../assets/images/preloader.gif'
import css from './Preloader.module.css';

let Preloader = () => {
    return(
        <div className={ css.preloader }>
            <img src={ preloader } alt="" />
        </div>
    )
}

export default Preloader;
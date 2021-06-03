import React from 'react';
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return(
        <div>
            <img className= { css.bg_img } src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
            <div className= { css.description }>ava + discription</div>
        </div>
    );
}

export default ProfileInfo;
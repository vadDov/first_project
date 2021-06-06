import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import css from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return(
        <div>
            <img className= { css.bg_img } src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
            <div className= { css.description }>
                <img src = { props.profile.photos.large }></img>
                ava + discription</div>
        </div>
    );
}

export default ProfileInfo;
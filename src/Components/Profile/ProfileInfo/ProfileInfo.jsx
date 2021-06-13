import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import css from './ProfileInfo.module.css';
import smiley from '../../../assets/images/smiley.svg'
import smile from '../../../assets/images/smile.svg'
import userPhoto from '../../../assets/images/user_photo.png';
import { Redirect } from 'react-router-dom';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }    
    return(
        <div>
            <img className= { css.bg_img } src="https://vjoy.cc/wp-content/uploads/2019/07/1-1.jpg"></img>
            <div className = { css.user_profile }>
                <div className= { css.description }>
                    <img src = { props.profile.photos.large || userPhoto }></img>
                </div>
                <div className = { css.user_info }>
                    <div className = { css.about_user }>
                        <ul>
                            <li><b>Full Name:</b> { props.profile.fullName || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>About Me:</b> { props.profile.aboutMe || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>looking for a job:</b> { props.profile.lookingForAJob ? <img className = { css.smiley } src = { smile }></img> : <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>looking for a job description:</b> { props.profile.lookingForAJobDescription || <img className = { css.smiley } src = { smiley }></img> }</li>
                        </ul>
                    </div>
                    <div className = { css.contacts }></div>
                        <ul>
                            <li><b>facebook:</b> { props.profile.contacts.facebook || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>website:</b> { props.profile.contacts.website || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>vk:</b> { props.profile.contacts.vk || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>twitter:</b> { props.profile.contacts.twitter || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>instagram:</b> { props.profile.contacts.instagram || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>youtube:</b> { props.profile.contacts.youtube || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>github:</b> { props.profile.contacts.github || <img className = { css.smiley } src = { smiley }></img> }</li>
                            <li><b>mainLink:</b> { props.profile.contacts.mainLink || <img className = { css.smiley } src = { smiley }></img> }</li>
                        </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
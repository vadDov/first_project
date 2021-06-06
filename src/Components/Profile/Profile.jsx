import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import css from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return(
        <div className= { css.content }>
            <ProfileInfo profile = { props.profile }/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
//postData= { props.profilePage.postData } postText = { props.profilePage.postText } dispatch = { props.dispatch }
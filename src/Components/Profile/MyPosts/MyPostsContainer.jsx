import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updatePostTextActionCreator } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStatetoProps = (state) => {
    return {
        postData: state.profilePage.postData,
        postText: state.profilePage.postText
    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changePostText: (body) => {
            dispatch(updatePostTextActionCreator(body))
        }
    }
}

const MyPostsContainer = connect(mapStatetoProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;

//postData= { props.profilePage.postData } postText = { props.profilePage.postText } dispatch = { props.dispatch }
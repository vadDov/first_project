import React from 'react';
import Post from './Post/Post';
import { addPost, updatePostText } from './../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        postText: state.profilePage.postText
    }
}
// let mapDispatchtoProps = (dispatch) => {
//     return {
//         addPost: () => {
//             dispatch(addPostActionCreator())
//         },
//         changePostText: (body) => {
//             dispatch(updatePostTextActionCreator(body))
//         }
//     }
// }

let mapDispatchToProps = { addPost, updatePostText }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

//postData= { props.profilePage.postData } postText = { props.profilePage.postText } dispatch = { props.dispatch }
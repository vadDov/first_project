import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts(props) {
    
    let postsElems = props.postData.map( elem => <Post id= { elem.id } message= { elem.message } likes= { elem.likes } key = { elem.id }/> );

    // let newPostElem = React.createRef();

    let addPost = () => {
        // props.dispatch( addPostActionCreator() );
        props.addPost()
    }

    let changePostText = (event) => {
        let text = event.target.value;
        // props.dispatch( updatePostTextActionCreator(newPostElem.current.value) )
        props.updatePostText(text);
    }

    return(
        <div className= { css.item }>
            <div className= { css.description }>
                <div>
                    <textarea onChange = { changePostText }   value = { props.postText }/>
                </div>
                <div>
                    <button onClick = { addPost }>Send</button>
                </div>
            </div>
            { postsElems }
        </div>
    );
}

export default MyPosts;
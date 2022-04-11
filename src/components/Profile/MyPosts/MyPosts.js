import React from 'react';
import Post from "./Post/Post";
import h from "./MyPosts.module.css";

const MyPosts = (props) => {

    let textAreaNewPost = React.createRef();

    let onAddPost = () => {
        props.addPostHandler();
    }

    let onPostChange = () => {
        let postValue = textAreaNewPost.current.value;
        props.updateNewPosttext(postValue);
    }

    let postItem = props.posts.map(el => <Post message = {el.message}  like = {el.like} id={el.id}/>)

    return (
        <div className={h.wrapperPosts}>
            <div className={h.wrapperFormPost}>
                <textarea ref={textAreaNewPost} onChange={onPostChange} value={props.newPostText} className={h.textarea} />
                <button className={h.buttonAddPost} onClick={onAddPost}>Add post</button>
            </div>
            {postItem}
        </div>
    );
}

export default MyPosts;

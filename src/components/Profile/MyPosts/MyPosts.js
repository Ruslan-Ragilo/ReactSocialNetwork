import React from 'react';
import Post from "./Post/Post";
import h from "./MyPosts.module.css";


const MyPosts = (props) => {


    let textAreaNewPost = React.createRef();

    let addPostHandler = () => {
        if (textAreaNewPost.current.value !=='') {
            let postValue = textAreaNewPost.current.value;
            props.state.addPost(postValue);
            textAreaNewPost.current.value = '';
        }

        else {
            textAreaNewPost.current.placeholder = 'Введите текст.....';
        }
    }

    let postItem = props.state.dataPost.map(el => <Post message = {el.message}  like = {el.like} id={el.id}/>)
    
    

    return (
        <div className={h.wrapperPosts}>
            <div className={h.wrapperFormPost}>
                <textarea ref={textAreaNewPost} className={h.textarea}></textarea>
                <button className={h.buttonAddPost} onClick={addPostHandler}>Add post</button>
            </div>
            {postItem}
        </div>
    );
}

export default MyPosts;

import React from 'react';

import { updateNewPosttextActionCreator, addPostActionCreator } from '../../../Redux/profileStateReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPostHandler = () => {
      props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
      let action = props.store.dispatch(updateNewPosttextActionCreator(text));
      props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPosttext = {onPostChange} addPostHandler={addPostHandler} posts={state.profileState.dataPost}
        newPostText={state.profileState.newPostText} />
    );
}

export default MyPostsContainer;

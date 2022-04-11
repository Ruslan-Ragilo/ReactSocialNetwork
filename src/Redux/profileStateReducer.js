const ADD_POST = "ADD-POST",
      UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  newPostText: "",

  dataPost: [
    { id: 1, like: Number(2), message: "Hi, how are you" },
    { id: 2, like: Number(9), message: "It is my first post" },
  ],
};

const profileStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: Number(3),
        message: state.newPostText,
        like: 0,
      };
      state.dataPost.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      let body = state.newMessageBody;
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPosttextActionCreator = (postValue) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: postValue,
});

export default profileStateReducer;

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT',
      SEND_MAESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { name: "Ruslan", id: "1"},
    { name: "Ira", id: "2"},
    { name: "Timofey", id: "3"},
    { name: "Mama", id: "4"}
  ],

  dataMessages: [
    { message: 'Hi', id: "1"},
    { message: 'How are you', id: "2"},
    { message: 'What', id: "3"},
    { message: 'Ok', id: "4"}
  ],

  newMessageBody: '',
}

const messagesStateReducer = (state = initialState, action) => {

  switch(action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageBody = action.body;
      return state;
    case SEND_MAESSAGE:
      let body = state.newMessageBody;
        state.newMessageBody = '';
        state.dataMessages.push({ message: body, id: "5"});
        return state;
    default:
      return state;
  }

}

export const sendMessageCreator = (postValue) => ({
  type: SEND_MAESSAGE
})

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  body: body
})

export default messagesStateReducer;
import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/messagesStateReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

  let messagesState = props.store.getState().messagesState;

    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <Dialogs updateNewMessageBody = {onMessageChange} sendMessage = {onSendMessageClick}
        messagesState={messagesState}/>
    );
}

export default DialogsContainer;
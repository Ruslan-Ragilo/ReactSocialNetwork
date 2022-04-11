import h from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';
import React from 'react';



const Dialogs = (props) => {

    let messagesState = props.messagesState;

    let dialog = messagesState.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />);
    let message = messagesState.dataMessages.map(el => <Message message={el.message} />);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={h.wrapperDialogs}>
            <div className={h.dialogs}>
                {dialog}
            </div>
            <div className={h.messages}>
                <div>{message}</div>
                <div>
                    <div> <textarea name="" id="" cols="30" rows="10"
                    value={newMessageBody}
                    onChange={onMessageChange}
                    ></textarea> </div>
                    <div> <button onClick={onSendMessageClick}> Send </button> </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
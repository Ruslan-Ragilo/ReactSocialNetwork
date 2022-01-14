import h from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItems/DialogItems';
import React from 'react';



const Dialogs = (props) => {

    

    let dialog = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id} />)

    
    let message = props.dataMessages.map(el => <Message message={el.message} />);

    return (
        <div className={h.wrapperDialogs}>
            <div className={h.dialogs}>
                {dialog}
            </div>
            <div className={h.messages}>
                {message}
            </div>
        </div>
    );
}

export default Dialogs;
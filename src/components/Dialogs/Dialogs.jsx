import React from "react";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import styles from "./Dialogs.module.css";
import DialogItem from './DialogsItem'
import Message from './Message'




const Dialogs = (props) => {
    const dialogsElement = props.dialogsData.map((el=> <DialogItem name={el.name} id={el.id}/>))
    const messageElement = props.messagesData.map(el=> <Message message={el.message}/>)
    let addMessage = () => {
        props.addMessage()
    }
    let onChangeMessage = (e) => {
        let newMessage = e.target.value
        props.changeMessage(newMessage)

    }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
       {dialogsElement}
      </div>
      <div className={styles.messages}>
          {messageElement}
          <textarea onChange={onChangeMessage} value={props.newMessage}></textarea>
          <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};

export default Dialogs;

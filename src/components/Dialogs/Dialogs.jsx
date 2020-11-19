import React from "react";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import styles from "./Dialogs.module.css";
import DialogItem from './DialogsItem'
import Message from './Message'




const Dialogs = (props) => {
    const dialogsData = props.state.dialogsData
    const messagesData = props.state.messagesData
    const dialogsElement = dialogsData.map((el=> <DialogItem name={el.name} id={el.id}/>))
    const messageElement = messagesData.map(el=> <Message message={el.message}/>)
    let addMessage = () => {
        // props.addMessage()
        // props.dispatch({type: 'ADD_MESSAGE'})
        props.dispatch(addMessageAC())
    }
    let onChangeMessage = (e) => {
        let newMessage = e.target.value
        // props.updateMessage(newMessageElement.current.value)
        // props.dispatch({type: 'UPDATE_MESSAGE', message: newMessageElement.current.value})
        props.dispatch(updateMessageAC(newMessage))

    }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
       {dialogsElement}
      </div>
      <div className={styles.messages}>
          {messageElement}
          <textarea onChange={onChangeMessage} value={props.state.newMessage}></textarea>
          <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};

export default Dialogs;

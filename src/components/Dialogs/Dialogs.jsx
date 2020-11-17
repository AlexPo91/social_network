import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from './DialogsItem'
import Message from './Message'




const Dialogs = (props) => {
    const dialogsData = props.state.dialogsData
    const messagesData = props.state.messagesData
    const dialogsElement = dialogsData.map((el=> <DialogItem name={el.name} id={el.id}/>))
    const messageElement = messagesData.map(el=> <Message message={el.message}/>)
    let newMessageElement = React.createRef()
    let addMessage = () => {
        console.log(newMessageElement.current.value)
    }
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
       {dialogsElement}
      </div>
      <div className={styles.messages}>
          {messageElement}
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};

export default Dialogs;

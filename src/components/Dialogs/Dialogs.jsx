import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem";
import Message from "./Message";

const Dialogs = (props) => {
  const dialogsElement = props.messagesPage.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));
  const messageElement = props.messagesPage.messagesData.map((el) => (
    <Message key={el.id} message={el.message} />
  ));
  let addMessage = () => {
    props.addMessage();
  };
  let onChangeMessage = (e) => {
    let newMessage = e.target.value;
    props.changeMessage(newMessage);
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messageElement}
        <textarea
          onChange={onChangeMessage}
          value={props.messagesPage.newMessage}
        ></textarea>
        <button onClick={addMessage}>add message</button>
      </div>
    </div>
  );
};

export default Dialogs;

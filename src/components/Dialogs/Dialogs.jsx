import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem";
import Message from "./Message";

let AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'newMessage'} placeholder={'Add new Message'}></Field>
      <button>Add Message</button>
    </form>
  )
}
AddMessageForm = reduxForm({form: "newMessageForm"})(AddMessageForm)

const Dialogs = (props) => {
  const dialogsElement = props.messagesPage.dialogsData.map((el) => (
    <DialogItem key={el.id} name={el.name} id={el.id} />
  ));
  const messageElement = props.messagesPage.messagesData.map((el) => (
    <Message key={el.id} message={el.message} />
  ));
  let addMessage = (value) => {
    props.addMessage(value.newMessage);
    console.log(value)
  };
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>{dialogsElement}</div>
      <div className={styles.messages}>
        {messageElement}
        <AddMessageForm onSubmit={addMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;

import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../utils/FormsControl";
import { maxLength, required } from "../../utils/validator";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem";
import Message from "./Message";

let maxLength50 = maxLength(50)

let AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea} name={'newMessage'} placeholder={'Add new Message'} validate={[required, maxLength50]}></Field>
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

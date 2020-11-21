import React from "react";
import { connect } from "react-redux";
import ContextStore from "../../ContextStore";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogsItem";
import Message from "./Message";

// const DialogsContainer = (props) => {

//   return (
//     <ContextStore.Consumer>
//     {
//       (store)=>{
//         const state = store.getState().messagesPage
//         let addMessage = () => {
//             store.dispatch(addMessageAC())
//         }
//         let onChangeMessage = (newMessage) => {
//             store.dispatch(updateMessageAC(newMessage))
//         }
//         return(
//           <Dialogs addMessage={addMessage} changeMessage = {onChangeMessage} dialogsData={state.dialogsData} messagesData={state.messagesData} newMessage={state.newMessage}/>
//         )
//       }
//     }
//     </ContextStore.Consumer>
//   );
// };
// export default DialogsContainer;

const mapStatetoProps = (state) => {
  const {messagesPage} = state
  return {
    messagesPage: messagesPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage(){
      dispatch(addMessageAC());
    },

    changeMessage(newMessage){
      dispatch(updateMessageAC(newMessage));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(Dialogs);

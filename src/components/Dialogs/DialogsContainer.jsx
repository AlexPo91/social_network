import { connect } from "react-redux";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";

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

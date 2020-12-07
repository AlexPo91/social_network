import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";

const mapStatetoProps = (state) => {
  const {messagesPage} = state
  return {
    messagesPage: messagesPage
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

export default compose(
  connect(mapStatetoProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
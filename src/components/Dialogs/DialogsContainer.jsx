import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageAC, updateMessageAC } from "../../redux/messagesPageReducer";
import Dialogs from "./Dialogs";

const mapStatetoProps = (state) => {
  const {messagesPage} = state
  return {
    messagesPage: messagesPage
    // isAuth: state.auth.isAuth
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

let AuthRedirectCompontnt = withAuthRedirect(Dialogs)

export default connect(mapStatetoProps, mapDispatchToProps)(AuthRedirectCompontnt);

import { addPostAC } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
const mpaDispatchToProps = (dispatch) => {
  return {
    addPost(newPost) {
      dispatch(addPostAC(newPost));
    }
  };
};
export default connect(mapStateToProps, mpaDispatchToProps)(MyPosts);

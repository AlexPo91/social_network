import React from "react";
import MyPosts from "./MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profilePageReducer";
import { withRouter } from "react-router-dom";
import { usersApi } from "../../api/api";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
let withRouterUrlProfileContainer = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(
  withRouterUrlProfileContainer
);

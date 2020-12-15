import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile } from "./../../redux/profilePageReducer";
import {withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getProfile, getAuthorizedId, getStatus } from "../../utils/selectors";

class ProfileContainer extends React.Component {
  refreshPropfile(){
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedId;
      if(!userId){
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId)

  }
  componentDidMount() {
   this.refreshPropfile()
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.match.params.userId!==prevProps.match.params.userId){
      this.refreshPropfile()
    }
  }
  render() {
    return (
      <div>
        <Profile {...this.props} isOwner = {!this.props.match.params.userId}
        profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: getProfile(state),
  status: getStatus(state),
  authorizedId: getAuthorizedId(state)
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer)

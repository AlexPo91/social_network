import React from "react";
import { connect } from "react-redux";
import {follow, unFollow, setCurrentPage, toggleIsFollow, getUsers} from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { getUsersPage, getIsFetching, getCurrentPage, getPageSize, getTotalCount, getFollowInPropgress } from "../../utils/selectors";
import { compose } from "redux";

class UsersApiContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
          <Users 
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followInPropgress={this.props.followInPropgress}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
          />
      
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersPage(state),
    isFetching: getIsFetching(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    followInPropgress: getFollowInPropgress(state)
  };
};
export default compose(
  connect(mapStateToProps, {follow, unFollow, setCurrentPage, toggleIsFollow, getUsers}))(UsersApiContainer)


import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
  toggleIsFollow,
  getUsers,
} from "../../redux/usersPageReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersApiContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    );
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
  };
  render() {
    return (
      <>
        {this.props.usersPage.isFetching ? (
          <Preloader />
        ) : (
          <Users 
            totalCount={this.props.usersPage.totalCount}
            pageSize={this.props.usersPage.pageSize}
            currentPage={this.props.usersPage.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.usersPage.users}
            followInPropgress={this.props.usersPage.followInPropgress}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            toggleIsFollow={this.props.toggleIsFollow}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};
export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalCount,
  setCurrentPage,
  toggleIsFetching,
  toggleIsFollow,
  getUsers,
})(UsersApiContainer);

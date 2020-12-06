import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import styles from './Header.module.css'
import {getUserAuthData} from '../../redux/auth-reducer'
import { usersApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount(){
    // fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {credentials: 'include'})
    // .then((data) => data.json())
    // usersApi.getAuthMe()
    // .then((parseData) => {
    //     let {id, login, email} = parseData.data
    //   this.props.setUserAuth(id, email, login)
    // });
    this.props.getUserAuthData()
  }
  render(){
    return(
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, {getUserAuthData})(HeaderContainer);

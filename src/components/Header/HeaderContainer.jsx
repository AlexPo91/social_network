import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import styles from './Header.module.css'
import {setUserAuth} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
  componentDidMount(){
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {credentials: 'include'})
    .then((data) => data.json())
    .then((parseData) => {
      // console.log(parseData)
        let {id, login, email} = parseData.data
        // console.log(id, login, email)
      this.props.setUserAuth(id, email, login)
    });
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

export default connect(mapStateToProps, {setUserAuth})(HeaderContainer);

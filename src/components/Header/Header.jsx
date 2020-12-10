import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://static.dezeen.com/uploads/2019/04/ikea-logo-new-hero-1.jpg" />
      <div className={styles.loginAuth}>
        {props.isAuth ? <div>{props.login}<button onClick={props.logOut}>Log Out</button></div> : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

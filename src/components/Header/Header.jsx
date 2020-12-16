import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'
import myLogo from '../../assets/image/logo_1.png'
console.log(myLogo)

const Header = ({isAuth, login, logOut}) => {
  return (
    <header className={styles.header}>
      <img src={myLogo}/>
      <div className={styles.loginAuth}>
        {isAuth ? <div>{login}<button onClick={logOut}>Log Out</button></div> : <NavLink to='/login'>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DialogsItem.module.css";


const DialogItem = (props) => {
    return(
        <div className={`${styles.dialogItem} ${styles.active}`}>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;

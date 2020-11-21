import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  return props.usersPage.users.map((user) => {
    return (
      <div className={styles.usersPage}>
        <div>
          <img src={user.photoUrl} />
          <div>{user.followed ? <button onClick={()=>{props.unFollow(user.id)}}>Unfollowed</button> : <button onClick={()=>{props.follow(user.id)}}>Followed</button>}</div>
        </div>
        <div>
    <div>{user.fullname}</div>
    <div>{user.status}</div>
        </div>
    <div>{`${user.location.city} ${user.location.country}`}</div>
        <div></div>
      </div>
    );
  });
};

export default Users;

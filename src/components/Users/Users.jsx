import React from "react";
import styles from "./Users.module.css";
import photoUser from "../../assets/image/photo.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let arrPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrPages.push(i);
  }
  return (
    <div>
      <div>
        {arrPages.map((el) => {
          return (
            <span key={el}
              className={props.currentPage === el ? styles.selected : null}
              onClick={() => {
                props.onPageChanged(el);
              }}
            >
              {el}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={styles.usersPage}>
          <NavLink to={"/profile/" + user.id}>
            <div>
              <img
                src={user.photos.large !== null ? user.photos.large : photoUser}
              />
            </div>
          </NavLink>
          <div>
            {user.followed ? (
              <button
                disabled={props.followInPropgress.includes(user.id)}
                onClick={() => {
                  props.unFollow(user.id);
                }}
              >
                Unfollowed
              </button>
            ) : (
              <button
                disabled={props.followInPropgress.includes(user.id)}
                onClick={() => {
                  props.follow(user.id);
                }}
              >
                Followed
              </button>
            )}
          </div>
          <div>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default Users;

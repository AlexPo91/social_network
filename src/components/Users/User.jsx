import React from "react";
import styles from "./Users.module.css";
import photoUser from "../../assets/image/photo.png";
import { NavLink } from "react-router-dom";

let User = ({user, followInPropgress, unFollow, follow }) => {
  return (
    <div>
        <div className={styles.usersPage}>
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
                disabled={followInPropgress.includes(user.id)}
                onClick={() => {
                  unFollow(user.id);
                }}
              >
                Unfollowed
              </button>
            ) : (
              <button
                disabled={followInPropgress.includes(user.id)}
                onClick={() => {
                  follow(user.id);
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
    </div>
  );
};

export default User;

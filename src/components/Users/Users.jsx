import React from "react";
import styles from "./Users.module.css";
import photoUser from "../../assets/image/photo.png";
import { NavLink } from "react-router-dom";
import { usersApi } from "../../api/api";

let Users = (props) => {
  console.log(props)
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let arrPages = [];
  for (let i = 1; i <= pagesCount; i++) {
    arrPages.push(i);
  }
  console.log(props)
  return (
    <div>
      <div>
        {arrPages.map((el) => {
          return (
            <span
              key={el}
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
        <div className={styles.usersPage}>
          <NavLink to={"/profile/" + user.id} key={user.id}>
            <div>
              <img
                src={user.photos.large !== null ? user.photos.large : photoUser}
              />
            </div>
          </NavLink>
          <div>
            {user.followed ? (
              <button disabled={props.followInPropgress.some(id=>user.id === id)}
                onClick={() => {
                    // fetch(
                    //     `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                    //     {
                    //       credentials: "include",
                    //       method: "DELETE",
                    //       headers: {
                    //         "API-Key": "3ca3c32f-3cf4-4af0-8468-8675dc4867d3",
                    //       },
                    //     }
                    //   )
                    //     .then((response) => response.json())
                    props.toggleIsFollow(true, user.id)
                    usersApi.unFollowUser(user)
                        .then((data) => {
                          if (data.resultCode === 0) {
                            props.unFollow(user.id);
                          }
                          props.toggleIsFollow(false, user.id)
                        });
                  
                }}
              >
                Unfollowed
              </button>
            ) : (
              <button disabled={props.followInPropgress.some(id=>user.id === id)}
                onClick={() => {
                  // fetch(
                  //   `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                  //   {
                  //     credentials: "include",
                  //     method: "POST",
                  //     headers: {
                  //       "API-Key": "3ca3c32f-3cf4-4af0-8468-8675dc4867d3",
                  //     },
                  //   }
                  // )
                  //   .then((response) => response.json())
                  props.toggleIsFollow(true, user.id)
                  usersApi.followUser(user)
                    .then((data) => {
                        console.log(data)
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                      props.toggleIsFollow(false, user.id)
                    });
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

import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({users, currentPage, onPageChanged, totalCount, pageSize, followInPropgress, unFollow, follow}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalCount={totalCount}
        pageSize={pageSize}
      />
      <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          followInPropgress={followInPropgress}
          unFollow={unFollow}
          follow={follow}
        />
      ))}
      </div>
    </div>
  );
};

export default Users;

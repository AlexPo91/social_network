import React from "react";
import MyPosts from "./MyPosts";
import styles from './Profile.module.css'
const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg" />
      </div>
      <div>ava+descr</div>
      <MyPosts/>
    </div>
  );
};
export default Profile;

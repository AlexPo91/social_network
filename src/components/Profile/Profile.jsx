import React from "react";
import MyPosts from "./MyPosts";
import styles from './Profile.module.css'
const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://img5.goodfon.ru/wallpaper/nbig/5/78/zakat-skamia-priroda.jpg" />
      </div>
      <div>ava+descr</div>
      <MyPosts/>
    </div>
  );
};
export default Profile;

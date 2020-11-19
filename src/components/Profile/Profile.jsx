import React from "react";
import MyPosts from "./MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  );
};
export default Profile;

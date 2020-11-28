import React from "react";
import MyPosts from "./MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";



const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  );
};
export default Profile;

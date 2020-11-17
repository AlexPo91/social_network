import React from "react";
import MyPosts from "./MyPosts";
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo";



const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <ProfileInfo/>
      <MyPosts profilePage={props.profilePage} addPost={props.addPost} updatePost={props.updatePost}/>
    </div>
  );
};
export default Profile;

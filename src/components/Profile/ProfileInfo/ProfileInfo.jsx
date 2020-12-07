import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <ProfileStatus status={'dcdcd'}/>
      <div>
          <span>{props.profile.fullName}</span>
          <br/>
          <span>{props.profile.aboutMe}</span>
          <br/>
          <span>{props.profile.lookingForAJobDescription}</span>
      </div>
    </div>
  );
};

export default ProfileInfo

import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile){
        return <Preloader/>
    }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src={profile.photos.large} />
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      <div>
          <span>{profile.fullName}</span>
          <br/>
          <span>{profile.aboutMe}</span>
          <br/>
          <span>{profile.lookingForAJobDescription}</span>
      </div>
    </div>
  );
};

export default ProfileInfo

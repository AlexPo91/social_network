import React from "react";
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import photoUser from "../../../assets/image/photo.png";
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile){
        return <Preloader/>
    }
    const onMainPhotoSelected = (e)=>{
      if(e.target.files.length){
        savePhoto(e.target.files[0])
      }
    }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img className={styles.mainPhoto} src={profile.photos.large || photoUser} />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
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

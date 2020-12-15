import React, { useState } from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import photoUser from "../../../assets/image/photo.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileData = ({ profile, isOwner, activateMode }) => {
  return (
    <div className={styles.profileData}>
      {isOwner && <button onClick={activateMode}>Edit</button>}
      <div>
        <span>Full Name:</span> {profile.fullName}
      </div>
      <div>
        <span>Looking for a job:</span> {profile.lookingForAJob ? "Yes" : "No"}
      </div>
      <div>
        <span>Looking for a job description:</span>{" "}
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <span>About Me:</span> {profile.aboutMe}
      </div>
      <div>
        <span>Contacts: </span>
        {Object.keys(profile.contacts).map((el) => {
          return (
            <div className={styles.contactsItem} key={el}>
              <b>{el}</b>:{profile.contacts[el]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) =>{
    saveProfile(formData).then(
      ()=>{
        setEditMode(false)
      }
    )
  }
  return (
    <div className={styles.profileInfo}>
      <div>
        <img
          className={styles.mainPhoto}
          src={profile.photos.large || photoUser}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      {editMode 
      ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
      : (
        <ProfileData
          isOwner={isOwner}
          profile={profile}
          activateMode={() => setEditMode(true)}
        />
      )}
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import styles from './ProfileInfo.module.css'
const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://www.freedigitalphotos.net/images/img/homepage/394230.jpg" />
      </div>
      <div>ava+descr</div>
    </div>
  );
};

export default ProfileInfo

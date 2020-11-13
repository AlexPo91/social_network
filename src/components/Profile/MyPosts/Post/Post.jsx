import React from "react";
import styles from "./Post.module.css";
const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://e7.pngegg.com/pngimages/931/209/png-clipart-computer-icons-symbol-avatar-logo-person-with-helmut-miscellaneous-black.png" />
      {props.message}
      <div>
        <span>Like: {props.likeCount}</span>
      </div>
    </div>
  );
};
export default Post;

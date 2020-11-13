import React from "react";
import Post from "./Post";
import styles from './MyPosts.module.css'
const MyPosts = () => {
  return (
    <div>
    My Post
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message="Helo! How are you?" likeCount={10}/>
      <Post message="Hello World" likeCount={20}/>
      <Post message="I'm fine!" likeCount={0}/>
    </div>
  </div>
  );
};
export default MyPosts;

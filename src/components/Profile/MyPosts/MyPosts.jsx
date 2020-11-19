import React from "react";
import Post from "./Post";
import styles from './MyPosts.module.css'
import { addPostAC, updatePostAC } from "../../../redux/profilePageReducer";





const MyPosts = (props) => {

  const postElement = props.postsData.map(el=> <Post message={el.message} likeCount={el.likeCount}/>)

  let addPost = () =>{
    props.addPost()
  }
  let onChangePost = (e) =>{
    let newPost = e.target.value
    props.updatePost(newPost)

  }
  return (
    <div>
    My Post
    <div>
      <textarea onChange={onChangePost} value={props.postMessage}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
    <div>
      {postElement}
    </div>
  </div>
  );
};
export default MyPosts;

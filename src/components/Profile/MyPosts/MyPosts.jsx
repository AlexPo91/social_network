import React from "react";
import Post from "./Post";
import styles from './MyPosts.module.css'
import { addPostAC, updatePostAC } from "../../../redux/profilePageReducer";





const MyPosts = (props) => {
  const postsData = props.profilePage.postsData
  const postElement = postsData.map(el=> <Post message={el.message} likeCount={el.likeCount}/>)

  let addPost = () =>{
    // props.addPost()
    // props.dispatch({type: "ADD_POST"})
    props.dispatch(addPostAC())
  }
  let onChangePost = (e) =>{
    let newPost = e.target.value
    // props.updatePost(text)
    // props.dispatch({type: "UPDATE_POST", message: newPostElement.current.value})
    props.dispatch(updatePostAC(newPost))
  }
  return (
    <div>
    My Post
    <div>
      <textarea onChange={onChangePost} value={props.profilePage.postMessage}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
    <div>
      {postElement}
    </div>
  </div>
  );
};
export default MyPosts;

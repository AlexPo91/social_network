import React from "react";
import Post from "./Post";
import styles from './MyPosts.module.css'





const MyPosts = (props) => {
  const postsData = props.profilePage.postsData
  const postElement = postsData.map(el=> <Post message={el.message} likeCount={el.likeCount}/>)
  let newPostElement = React.createRef()

  let addPost = () =>{
    props.addPost()
  }
  let onChangePost = () =>{
    let text = newPostElement.current.value
    props.updatePost(text)
  }
  return (
    <div>
    My Post
    <div>
      <textarea ref={newPostElement} onChange={onChangePost} value={props.profilePage.postMessage}></textarea>
      <button onClick={addPost}>Add post</button>
    </div>
    <div>
      {postElement}
    </div>
  </div>
  );
};
export default MyPosts;

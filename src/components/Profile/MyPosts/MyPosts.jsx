import React from "react";
import Post from "./Post";

const MyPosts = (props) => {
  const postElement = props.profilePage.postsData.map((el) => (
    <Post key={el.id} message={el.message} likeCount={el.likeCount} />
  ));

  let addPost = () => {
    props.addPost();
  };
  let onChangePost = (e) => {
    let newPost = e.target.value;
    props.updatePost(newPost);
  };
  return (
    <div>
      My Post
      <div>
        <textarea
          onChange={onChangePost}
          value={props.profilePage.postMessage}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;

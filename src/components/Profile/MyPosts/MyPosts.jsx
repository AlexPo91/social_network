import React from "react";
import { Field, reduxForm } from "redux-form";
import Post from "./Post";

let AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field
          component={'textarea'}
          placeholder={'Add new Post'}
          name={'newPost'}
        ></Field>
        <button>Add post</button>
      </form>
  )
}
AddPostForm = reduxForm({form: 'newPostForm'})(AddPostForm)

const MyPosts = (props) => {
  const postElement = props.profilePage.postsData.map((el) => (
    <Post key={el.id} message={el.message} likeCount={el.likeCount} />
  ));

  let addPost = (value) => {
    props.addPost(value.newPost);
  };
  return (
    <div>
      My Post
      <AddPostForm onSubmit={addPost}/>
      <div>{postElement}</div>
    </div>
  );
};
export default MyPosts;

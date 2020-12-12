import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../utils/FormsControl";
import { maxLength, required } from "../../../utils/validator";
import Post from "./Post";

let maxLength100 = maxLength(100)
let AddPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          placeholder={'Add new Post'}
          name={'newPost'}
          validate={[required, maxLength100]}
        ></Field>
        <button>Add post</button>
      </form>
  )
}
AddPostForm = reduxForm({form: 'newPostForm'})(AddPostForm)

const MyPosts = React.memo(props => {
  const postElement = props.postsData.map((el) => (
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
}) ;


export default MyPosts;

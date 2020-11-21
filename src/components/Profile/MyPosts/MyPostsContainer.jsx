import React from "react";
import Post from "./Post";
import styles from './MyPosts.module.css'
import { addPostAC, updatePostAC } from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import ContextStore from "../../../ContextStore";
import { connect } from "react-redux";





// const MyPostsContainer = (props) => {
  
//   return (
//     <ContextStore.Consumer>
//       {
//         (store)=>{
//   const state = store.getState().profilePage


//   let addPost = () =>{
//     store.dispatch(addPostAC())
//   }
//   let updatePost = (newPost) =>{
//     store.dispatch(updatePostAC(newPost))
//   }
//           return(
//             <MyPosts addPost={addPost} updatePost={updatePost} postsData={state.postsData} postMessage={state.postMessage}/>
//           )
//         }
//       }
//     </ContextStore.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
    // postsData: state.profilePage.postsData ,
    // postMessage: state.profilePage.postMessage
  }
}
const mpaDispatchToProps = (dispatch) => {
  return {
    addPost(){
      dispatch(addPostAC())
    },
    updatePost(newPost){
          dispatch(updatePostAC(newPost))
        }
  }
}
export default connect(mapStateToProps, mpaDispatchToProps)(MyPosts);




// const MyPostsContainer = (props) => {
  
//   return (
//     <ContextStore.Consumer>
//       {
//         (store)=>{
//   const state = store.getState().profilePage


//   let addPost = () =>{
//     store.dispatch(addPostAC())
//   }
//   let updatePost = (newPost) =>{
//     store.dispatch(updatePostAC(newPost))
//   }
//           return(
//             <MyPosts addPost={addPost} updatePost={updatePost} postsData={state.postsData} postMessage={state.postMessage}/>
//           )
//         }
//       }
//     </ContextStore.Consumer>
//   );
// };
// export default MyPostsContainer;

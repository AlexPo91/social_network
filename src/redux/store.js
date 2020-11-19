// const ADD_POST = "ADD_POST"
// const UPDATE_POST = "UPDATE_POST"
// const ADD_MESSAGE = "ADD_MESSAGE"
// const UPDATE_MESSAGE = "UPDATE_MESSAGE"

import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";

// export const addPostAC = () => {
//   return {
//     type: ADD_POST
//   }
// }

// export const updatePostAC = (message) => {
//   return {
//     type: UPDATE_POST,
//     message: message
//   }
// }

// export const addMessageAC = () => {
//   return {
//     type: ADD_MESSAGE
//   }
// }

// export const updateMessageAC = (message) => {
//   return {
//     type: UPDATE_MESSAGE,
//     message: message
//   }
// }

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Helo! How are you?", likeCount: 10 },
        { id: 2, message: "Hello World", likeCount: 20 },
        { id: 3, message: "I'm fine!", likeCount: 0 },
      ],
      postMessage: "",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Karina" },
        { id: 3, name: "Dima" },
        { id: 4, name: "Tania" },
        { id: 5, name: "Vitalik" },
        { id: 6, name: "Anna" },
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Well done" },
      ],
      newMessage: "",
    },
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
    // switch (action.type) {
      // case "ADD_POST":
      //   let countPosts = this._state.profilePage.postsData.length;
      //   let newPost = {
      //     id: countPosts++,
      //     message: this._state.profilePage.postMessage,
      //     likeCount: 0,
      //   };
      //   this._state.profilePage.postsData.push(newPost);
      //   this._state.profilePage.postMessage = "";
      //   this._callSubscriber(this._state);
      //   break;
      // case "UPDATE_POST":
      //   this._state.profilePage.postMessage = action.message;
      //   this._callSubscriber(this._state);
      // case "ADD_MESSAGE":
      //   let countMessage = this._state.messagesPage.messagesData.length;
      //   let newMessage = {
      //     id: countMessage++,
      //     message: this._state.messagesPage.newMessage,
      //   };
      //   this._state.messagesPage.messagesData.push(newMessage);
      //   this._state.messagesPage.newMessage = "";
      //   this._callSubscriber(this._state);
      //   break;
      // case "UPDATE_MESSAGE":
      //   this._state.messagesPage.newMessage = action.message;
      // default:
      //   break;
      this._callSubscriber(this._state);
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  addPost() {
    let count = this._state.profilePage.postsData.length;
    let newMessage = {
      id: count++,
      message: this._state.profilePage.postMessage,
      likeCount: 0,
    };
    this._state.profilePage.postsData.push(newMessage);
    this._state.profilePage.postMessage = "";
    this._callSubscriber(this._state);
  },
  updatePost(message) {
    this._state.profilePage.postMessage = message;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let count = this._state.messagesPage.messagesData.length;
    let newMessage = {
      id: count++,
      message: this._state.messagesPage.newMessage,
    };
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessage = "";
    this._callSubscriber(this._state);
  },
  updateMessage(message) {
    this._state.messagesPage.newMessage = message;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};
window.store = store;
// const state = {
//   profilePage: {
//     postsData: [
//       { id: 1,message: "Helo! How are you?", likeCount: 10 },
//       { id: 2,message: "Hello World", likeCount: 20 },
//       { id: 3,message: "I'm fine!", likeCount: 0 },
//     ],
//     postMessage: ''
//   },
//   messagesPage: {
//     dialogsData: [
//       { id: 1, name: "Alex" },
//       { id: 2, name: "Karina" },
//       { id: 3, name: "Dima" },
//       { id: 4, name: "Tania" },
//       { id: 5, name: "Vitalik" },
//       { id: 6, name: "Anna" },
//     ],
//     messagesData: [
//       { id: 1, message: "Hi" },
//       { id: 2, message: "How are you" },
//       { id: 3, message: "Well done" },
//     ],
//     newMessage: ''
//   },
// };

// export let addPost = () => {
//   let count = state.profilePage.postsData.length
//   let newMessage = {
//     id: count++,
//     message: state.profilePage.postMessage,
//     likeCount: 0
//   }
//   state.profilePage.postsData.push(newMessage)
//   state.profilePage.postMessage = ''
//   rerenderEntireTree(state)
// }
// export let updatePost = (message) => {
//   state.profilePage.postMessage = message
//   rerenderEntireTree(state)
// }

// export let addMessage = () => {
//   let count = state.messagesPage.messagesData.length
//   let newMessage = {
//     id: count++,
//     message: state.messagesPage.newMessage
//   }
//   state.messagesPage.messagesData.push(newMessage)
//   state.messagesPage.newMessage = ''
//   rerenderEntireTree(state)
// }
// export let updateMessage = (message) => {
//   state.messagesPage.newMessage = message
//   rerenderEntireTree(state)
// }

// export const subscribe=(observer)=>{
//   rerenderEntireTree = observer
// }

export default store;

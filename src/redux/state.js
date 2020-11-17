import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    postsData: [
      { id: 1,message: "Helo! How are you?", likeCount: 10 },
      { id: 2,message: "Hello World", likeCount: 20 },
      { id: 3,message: "I'm fine!", likeCount: 0 },
    ],
    postMessage: 'dddd'
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
      { id: "", message: "Hi" },
      { id: "", message: "How are you" },
      { id: "", message: "Well done" },
    ],
  },
};

export let addPost = () => {
  let count = state.profilePage.postsData.length
  let newMessage = {
    id: count++,
    message: state.profilePage.postMessage,
    likeCount: 0
  }
  state.profilePage.postsData.push(newMessage)
  state.profilePage.postMessage = ''
  rerenderEntireTree(state)
}
export let updatePost = (message) => {
  state.profilePage.postMessage = message
  rerenderEntireTree(state)
}

export default state;

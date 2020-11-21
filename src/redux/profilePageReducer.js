const ADD_POST = "ADD_POST"
const UPDATE_POST = "UPDATE_POST"

const initialState = {
  postsData: [
    { id: 1, message: "Helo! How are you?", likeCount: 10 },
    { id: 2, message: "Hello World", likeCount: 20 },
    { id: 3, message: "I'm fine!", likeCount: 0 },
  ],
  postMessage: "",
}

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      let countPosts = state.postsData.length;
      let newPost = {
        id: countPosts++,
        message: state.postMessage,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        postMessage: ''
      }
  
      case "UPDATE_POST":{
        return {
          ...state,
          postMessage: action.message
        }
      }
        // const newState = {...state}
        // newState.postMessage = action.message
        //   // state.postMessage = action.message;
        //   return newState}
    default: return state
  }
};

export const addPostAC = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const updatePostAC = (message) => {
    return {
      type: UPDATE_POST,
      message: message
    }
  }

export default profilePageReducer;

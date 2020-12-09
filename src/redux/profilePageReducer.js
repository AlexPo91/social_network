import { profileApi, usersApi } from "../api/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postsData: [
    { id: 1, message: "Helo! How are you?", likeCount: 10 },
    { id: 2, message: "Hello World", likeCount: 20 },
    { id: 3, message: "I'm fine!", likeCount: 0 },
  ],
  postMessage: "",
  profile: null,
  status: ''
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      let countPosts = state.postsData.length;
      let newPost = {
        id: ++countPosts,
        message: state.postMessage,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        postMessage: "",
      };

    case "UPDATE_POST": {
      return {
        ...state,
        postMessage: action.message,
      };
    }
    case "SET_USER_PROFILE": {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SET_STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostAC = () => {
  return {
    type: ADD_POST,
  };
};

export const updatePostAC = (message) => {
  return {
    type: UPDATE_POST,
    message: message,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};
export const setStatus = (status) => { 
  return {
    type: SET_STATUS,
    status: status,
  };
};

export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersApi.getProfile(userId).then((parseData) => {
      dispatch(setUserProfile(parseData));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch)=> {
    profileApi.getStatus(userId).then((parseData)=>{
      dispatch(setStatus(parseData))
    })
  }
}
export const updateStatus = (status) => {
  return (dispatch)=> {
    profileApi.updateStatus(status).then((parseData)=>{
      if(parseData.resultCode === 0){
      dispatch(setStatus(status))
      }
    })
  }
}

export default profilePageReducer;

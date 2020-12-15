import { stopSubmit } from "redux-form";
import { profileApi, usersApi } from "../api/api";

const ADD_POST = "social-network/profilePageReducer/ADD_POST";
const DELETE_POST = "social-network/profilePageReducer/DELETE_POST";
const SET_USER_PROFILE = "social-network/profilePageReducer/SET_USER_PROFILE";
const SET_STATUS = "social-network/profilePageReducer/SET_STATUS";
const SAVE_PHOTO = "social-network/profilePageReducer/SAVE_PHOTO";

const initialState = {
  postsData: [
    { id: 1, message: "Helo! How are you?", likeCount: 10 },
    { id: 2, message: "Hello World", likeCount: 20 },
    { id: 3, message: "I'm fine!", likeCount: 0 },
  ],
  profile: null,
  status: "",
};

const profilePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let countPosts = state.postsData.length;
      let newPost = {
        id: ++countPosts,
        message: action.postMessage,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((el) => el.id !== action.postId),
      };
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos},
      };
    }
    default:
      return state;
  }
};

export const addPostAC = (postMessage) => {
  return {
    type: ADD_POST,
    postMessage,
  };
};
export const deletePostAC = (postId) => {
  return {
    type: DELETE_POST,
    postId,
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
export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO,
    photos,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersApi.getProfile(userId);
  dispatch(setUserProfile(response));
};

export const getUserStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getUserStatus(userId);
  dispatch(setStatus(response));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status);
  if (response.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (photo) => async (dispatch) => {
  let response = await profileApi.savePhoto(photo);
  if (response.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};
export const saveProfile = (data) => async (dispatch, getState) => {
  const id = getState().auth.id
  let response = await profileApi.saveProfile(data);
  if (response.resultCode === 0) {
    dispatch(getUserProfile(id));
  }else{
    dispatch(stopSubmit('edit-profile', {_error: response.messages}))
    return Promise.reject(response.messages[0])
  }
};

export default profilePageReducer;

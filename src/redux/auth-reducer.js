import { stopSubmit } from "redux-form";
import { authApi } from "./../api/api";
const SET_USER_AUTH = "SET_USER_AUTH";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_AUTH":
      return {
        ...state,
        ...action.userData
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_AUTH,
    userData: { id, email, login, isAuth },
  };
};

export const getUserAuthData = () => {
  return (dispatch) => {
    authApi.me().then((parseData) => {
      if(parseData.resultCode===0)
        {
          let { id, login, email } = parseData.data;
      dispatch(setUserAuthData(id, email, login, true));
        }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe).then((parseData) => {
      if(parseData.resultCode===0)
        {
          dispatch(getUserAuthData())
        }
      else{
        let message = parseData.messages.length > 0 ? parseData.messages[0] : "Some Error"
        dispatch(stopSubmit('login',{_error: message}))
      }
    });
  };
};

export const logOut = () => {
  return (dispatch) => {
    authApi.logOut().then((parseData) => {
      if(parseData.resultCode===0)
        {
          dispatch(setUserAuthData(null, null, null, false))
        }
    });
  };
};

export default authReducer;

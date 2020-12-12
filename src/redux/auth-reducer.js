import { stopSubmit } from "redux-form";
import { authApi } from "./../api/api";
const SET_USER_AUTH = "social-network/auth-reducer/SET_USER_AUTH";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.userData,
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

export const getUserAuthData = () => async (dispatch) => {
  const response = await authApi.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authApi.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getUserAuthData());
  } else {
    let message =
      response.messages.length > 0 ? response.messages[0] : "Some Error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logOut = () => async (dispatch) => {
  const response = await authApi.logOut();
  if (response.resultCode === 0) {
    dispatch(setUserAuthData(null, null, null, false));
  }
};

export default authReducer;

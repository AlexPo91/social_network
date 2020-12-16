import { stopSubmit } from "redux-form";
import { authApi, securityApi } from "./../api/api";
const SET_USER_AUTH = "social-network/auth-reducer/SET_USER_AUTH";
const SET_CAPTCHA_URL = "social-network/auth-reducer/SET_CAPTCHA_URL";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...action.userData,
      };
      case SET_CAPTCHA_URL:
        return {
          ...state,
          captchaUrl: action.captchaUrl
        }
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
export const setCaptchaUrl = (url) => {
  return {
    type: SET_CAPTCHA_URL,
    captchaUrl: url,
  };
};

export const getUserAuthData = () => async (dispatch) => {
  const response = await authApi.me();
  if (response.resultCode === 0) {
    let { id, login, email } = response.data;
    dispatch(setUserAuthData(id, email, login, true));
  }
};

export const login = (email, password, captcha, rememberMe) => async (dispatch) => {
  const response = await authApi.login(email, password, captcha, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getUserAuthData());
  } else {
    if(response.resultCode === 10){
      dispatch(getCaptchaUrl())
    }
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
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityApi.getCaptchaUrl();
  const url = response.url
  dispatch(setCaptchaUrl(url))
};

export default authReducer;

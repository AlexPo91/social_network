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
        ...action.userData,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setUserAuthData = (id, email, login) => {
  return {
    type: SET_USER_AUTH,
    userData: { id, email, login },
  };
};

export const getUserAuthData = () => {
  return (dispatch) => {
    authApi.me().then((parseData) => {
      if(parseData.resultCode===0)
        {
          let { id, login, email } = parseData.data;
      dispatch(setUserAuthData(id, email, login));
        }
    });
  };
};

export default authReducer;

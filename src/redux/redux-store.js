import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReducer } from 'redux-form'

import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import appReducer from "./app-reducer";

const reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.store = store
export default store;

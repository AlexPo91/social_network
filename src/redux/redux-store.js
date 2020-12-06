import { createStore, combineReducers, applyMiddleware } from "redux";

import profilePageReducer from './profilePageReducer'
import messagesPageReducer from './messagesPageReducer'
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store
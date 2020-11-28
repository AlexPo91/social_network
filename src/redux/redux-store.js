import { createStore, combineReducers } from "redux";

import profilePageReducer from './profilePageReducer'
import messagesPageReducer from './messagesPageReducer'
import usersPageReducer from "./usersPageReducer";
import authReducer from "./auth-reducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

const store = createStore(reducers)

export default store
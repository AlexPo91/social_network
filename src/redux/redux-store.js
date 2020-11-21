import { createStore, combineReducers } from "redux";

import profilePageReducer from './profilePageReducer'
import messagesPageReducer from './messagesPageReducer'
import usersPageReducer from "./usersPageReducer";

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
    usersPage: usersPageReducer
})

const store = createStore(reducers)

export default store
import { createStore, combineReducers } from "redux";

import profilePageReducer from './profilePageReducer'
import messagesPageReducer from './messagesPageReducer'

const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagesPageReducer,
})

const store = createStore(reducers)

export default store
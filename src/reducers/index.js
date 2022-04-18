import { combineReducers } from "redux";
import menuReducer from './menuReducer'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

export default combineReducers({
    menu: menuReducer,
    error: errorReducer,
    auth: authReducer
})
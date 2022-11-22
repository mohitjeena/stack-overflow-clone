import { combineReducers } from "redux";
import currentUserReducer from "./currentUser";
import AuthReducers from "./auth";
import questionReducer from "./question"
import userReducer from "./user";

export default combineReducers({
  AuthReducers,currentUserReducer,questionReducer,userReducer
})
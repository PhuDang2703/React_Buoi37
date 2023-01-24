import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({
  //key: value
  userReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import books from "./books/reducer";

export default combineReducers({
  appState,
  user,
  books,
});

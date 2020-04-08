import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import books from "./books/reducer";
import categories from "./categories/reducer"

export default combineReducers({
  appState,
  user,
  books,
  categories
});

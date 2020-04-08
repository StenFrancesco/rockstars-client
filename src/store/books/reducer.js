import { FETCH_BOOKS_SUCCESS } from "./actions";
import { ADD_BOOK_SUCCESS } from "../addBook/actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;
    // case ADD_BOOK_SUCCESS:
    //   return [...state,{...action.payload}]
    default:
      return state;
  }
};

import { FETCH_BOOKS_SUCCESS } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};

// import { apiUrl, DEFAULT_PAGINATION_LIMIT } from "../../config/constants";
import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooks = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        //   `${apiUrl}/books?limit=${DEFAULT_PAGINATION_LIMIT}`
        `${apiUrl}/books`
      );

      console.log("response.data: ", response.data);
      dispatch(fetchBooksSuccess(response.data));
    } catch (error) {
      console.error(error.message);
    }
  };
};

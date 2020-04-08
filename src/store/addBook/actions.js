import { apiUrl} from "../../config/constants";
import axios from "axios";
import { selectUser } from "../user/selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";

export const addBookSuccess = newBook => ({
  type: ADD_BOOK_SUCCESS,
  payload: newBook
});

export const addBook = (
  ISBN,
  name,
  author,
  description,
  price,
  imageUrl,
  categoryId,
  price_percentage
) => {
  return async (dispatch, getState) => {
    const { token, id } = selectUser(getState());

    dispatch(appLoading());
    console.log(getState())
    try {
      const response = await axios.post(
        `${apiUrl}/user/add-book`,
        {
          ISBN,
          name,
          author,
          description,
          price,
          imageUrl,
          categoryId,
          price_percentage,
          userId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(
        showMessageWithTimeout("success", false, response.data.message, 3000)
      );
      dispatch(addBookSuccess(response.data.newBook));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        console.log(error.response);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS";

export const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload: category
});

export const fetchCategory = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/category`
      );

      dispatch(fetchCategorySuccess(response.data.allCategories));
    } catch (error) {
      console.error(error.message);
    }
  };
};
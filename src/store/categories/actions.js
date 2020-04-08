import { apiUrl } from "../../config/constants"
import axios from "axios";

export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS"

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories
})

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${apiUrl}/category`
      )
      console.log("response.data is:", response.data)
      dispatch(fetchCategoriesSuccess(response.data.allCategories))
    } catch (error) {
      console.error(error.message)
    }
  }
}
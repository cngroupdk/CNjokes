import axios from "axios";
import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  FETCH_RANDOM_JOKE,
  SEARCH_JOKE
} from "./actionTypes";

const BASE_URL = "https://api.chucknorris.io/jokes";

export const fetchCategories = () => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/categories`);
    dispatch({ type: FETCH_CATEGORIES, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const selectCategory = category => {
  return { type: SELECT_CATEGORY, payload: category };
};

export const fetchRandomJoke = (category = null) => async dispatch => {
  try {
    const categoryParam = category ? `?category=${category}` : "";
    const res = await axios.get(`${BASE_URL}/random${categoryParam}`);
    dispatch({ type: FETCH_RANDOM_JOKE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const searchJoke = query => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/search?query=${query}`);
    dispatch({ type: SEARCH_JOKE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

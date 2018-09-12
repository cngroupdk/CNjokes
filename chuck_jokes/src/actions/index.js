import axios from "axios";
import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  FETCH_RANDOM_JOKE,
  SEARCH_JOKE
} from "./actionTypes";

const BASE_URL = "https://api.chucknorris.io/jokes";
const headers = {
  headers: { "accept": "application/json|text/plain)" }
};

export const fetchCategories = () => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/categories`, headers);
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
    const res = await axios.get(`${BASE_URL}/random${categoryParam}`, headers);
    dispatch({ type: FETCH_RANDOM_JOKE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const searchJoke = query => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/search?query=${query}`, headers);
    dispatch({ type: SEARCH_JOKE, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

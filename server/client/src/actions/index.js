import axios from "axios";
import {
  FETCH_RANDOM_JOKE,
  FETCH_JOKES,
  SEARCH_JOKES,
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  SET_NUMBER,
  SET_IS_RANDOM,
  CLEAR_JOKES_ARRAY,
  RESTART_PAGINATION_SETTINGS
} from "./actionTypes";

export const fetchRandomJoke = category => async dispatch => {
  const param = category ? `?category=${category}` : "";
  const url = `/api/jokes/random${param}`;
  const res = await axios.get(url);
  dispatch(setIsRandom(true));
  dispatch({ type: FETCH_RANDOM_JOKE, payload: res.data });
};

export const fetchJokes = (
  limit = 100,
  perPage = 15,
  page = 1,
  category = null,
  callback = null
) => async dispatch => {
  const categoryParam = category ? `&category=${category}` : "";
  const url = `/api/jokes?limit=${limit}&page=${page}&perPage=${perPage}${categoryParam}`;
  const res = await axios.get(url);
  if (callback) callback();
  if (page === 1) dispatch(clearJokesArray());
  dispatch(setIsRandom(false));
  dispatch({ type: FETCH_JOKES, payload: res.data });
};

export const searchJokes = query => async dispatch => {
  const url = `/api/jokes/search?query=${query}`;
  const res = await axios.get(url);
  dispatch(setIsRandom(false));
  dispatch({ type: SEARCH_JOKES, payload: res.data });
};

export const fetchCategories = () => async dispatch => {
  const url = "/api/categories";
  const res = await axios.get(url);
  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const selectCategory = category => dispatch => {
  dispatch(restartPaginationSettigns());
  dispatch({ type: SELECT_CATEGORY, payload: category });
};

export const setNumber = number => {
  return { type: SET_NUMBER, payload: number };
};

const setIsRandom = random => {
  return { type: SET_IS_RANDOM, payload: random };
};

const clearJokesArray = () => {
  return { type: CLEAR_JOKES_ARRAY };
};

const restartPaginationSettigns = () => {
  return { type: RESTART_PAGINATION_SETTINGS };
};

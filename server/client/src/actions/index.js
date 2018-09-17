import axios from "axios";
import {
  FETCH_RANDOM_JOKE,
  FETCH_JOKES,
  SEARCH_JOKES,
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  SET_NUMBER
} from "./actionTypes";

export const fetchRandomJoke = category => async dispatch => {
  const param = category ? `?category=${category}` : "";
  const url = `/api/jokes/random${param}`;
  const res = await axios.get(url);
  dispatch({ type: FETCH_RANDOM_JOKE, payload: res.data });
};

export const fetchJokes = (
  limit = 100,
  perPage = 10,
  page = 1,
  callback
) => async dispatch => {
  const url = `/api/jokes?limit=${limit}&page=${page}&perPage=${perPage}&category=dev`;
  const res = await axios.get(url);
  callback();
  dispatch({ type: FETCH_JOKES, payload: res.data });
};

export const searchJokes = query => async dispatch => {
  const url = `/api/jokes/search?query=${query}`;
  const res = await axios.get(url);
  dispatch({ type: SEARCH_JOKES, payload: res.data });
};

export const fetchCategories = () => async dispatch => {
  const url = "/api/categories";
  const res = await axios.get(url);
  dispatch({ type: FETCH_CATEGORIES, payload: res.data });
};

export const selectCategory = category => {
  return { type: SELECT_CATEGORY, payload: category };
};

export const setNumber = number => {
  return { type: SET_NUMBER, payload: number };
};
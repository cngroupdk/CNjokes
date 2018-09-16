import axios from "axios";
import { FETCH_JOKES, SEARCH_JOKES } from "./actionTypes";

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

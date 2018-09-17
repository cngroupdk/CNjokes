import axios from "axios";
import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY,
  SET_NUMBER,
  FETCH_RANDOM_JOKE,
  FETCH_ALL_JOKES,
  SEARCH_JOKE
} from "./actionTypes";

const BASE_URL = "https://api.chucknorris.io/jokes";
const headers = {
  headers: { accept: "application/json|text/plain)" }
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

export const setNumber = number => {
  return { type: SET_NUMBER, payload: number };
};

export const fetchAllJokes = () => async dispatch => {
  try {
    const jokes = localStorage.getItem("jokes");

    if (jokes) {
      console.log("jokes loaded from local storage");
      dispatch({ type: FETCH_ALL_JOKES, payload: JSON.parse(jokes) });
    } else {
      console.log("fetching jokes");
      const res = await axios.get(`${BASE_URL}/search?query=chuck`, headers);
      // TODO
      // dispatch action type LOADING
      localStorage.setItem("jokes", JSON.stringify([...res.data.result]));
      dispatch({ type: FETCH_ALL_JOKES, payload: res.data.result });
    }
  } catch (error) {
    console.error(error);
  }
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
    const regex = new RegExp(query.toLowerCase(), "g");
    const jokesData = localStorage.getItem("jokes");
    const jokes = JSON.parse(jokesData);
    const result = jokes.filter(joke => joke.value.toLowerCase().match(regex));

    //const res = await axios.get(`${BASE_URL}/search?query=${query}`, headers);
    dispatch({ type: SEARCH_JOKE, payload: result });
  } catch (error) {
    console.error(error);
  }
};

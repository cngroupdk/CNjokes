export const SET_JOKE = "SET_JOKE"; // action types
export const SET_SEARCHED_JOKES = "SET_SEARCHED_JOKES";
export const SET_JOKES_LOADING = "SET_JOKES_LOADING";
export const SET_QUERY_INVALID = "SET_QUERY_INVALID";
export const SET_QUERY_VALID = "SET_QUERY_VALID";
export const SET_QUERY = "SET_QUERY";
export const SET_CATEGORY = "SET_CATEGORY";

export const setJoke = data => ({
  type: SET_JOKE,
  data: data // action payload
});

export const setSearchedJokes = data => ({
  type: SET_SEARCHED_JOKES,
  data: data
});

export const setJokesLoading = () => ({
  type: SET_JOKES_LOADING
});

export const setQueryInvalid = () => ({
  type: SET_QUERY_INVALID
});

export const setQueryValid = () => ({
  type: SET_QUERY_VALID
});

export const setQuery = query => ({
  type: SET_QUERY,
  query: query
});

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  category: categoryName
});

export const SET_JOKE = 'SET_JOKE'; // action types
export const SET_SEARCHED_JOKES = 'SET_SEARCHED_JOKES';
export const SET_JOKES_LOADING = 'SET_JOKES_LOADING';
export const SET_QUERY_INVALID = 'SET_QUERY_INVALID';
export const SET_QUERY_VALID = 'SET_QUERY_VALID';
export const SET_QUERY = 'SET_QUERY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_JOKES_COUNT = 'SET_JOKES_COUNT';
export const SET_JOKES_LOADED = 'SET_JOKES_LOADED';
export const SET_CATEGORY_JOKES = 'SET_CATEGORY_JOKES';

// SpecialJokeBlock
export const setJoke = data => ({
  type: SET_JOKE,
  data: data, // action payload
});

// SearchBlock
export const setSearchedJokes = data => ({
  type: SET_SEARCHED_JOKES,
  data: data,
});

export const setJokesLoading = () => ({
  type: SET_JOKES_LOADING,
});

export const setQueryInvalid = () => ({
  type: SET_QUERY_INVALID,
});

export const setQueryValid = () => ({
  type: SET_QUERY_VALID,
});

export const setQuery = query => ({
  type: SET_QUERY,
  query: query,
});

// CategoryBlock
export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  category: categoryName,
});

export const setCategories = data => ({
  type: SET_CATEGORIES,
  data: data,
});

export const setJokesCount = jokesCountNumber => ({
  type: SET_JOKES_COUNT,
  count: jokesCountNumber,
});

export const setJokesLoaded = () => ({
  type: SET_JOKES_LOADED,
});

export const setCategoryJokes = (jokes, hasDuplicateJokes) => ({
  type: SET_CATEGORY_JOKES,
  jokes: jokes,
  hasDuplicateJokes: hasDuplicateJokes,
});

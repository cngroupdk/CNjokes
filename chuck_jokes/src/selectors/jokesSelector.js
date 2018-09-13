import { createSelector } from "reselect";

const getJokes = state => state.jokes;
const getCategories = state => state.jokesFilter.category;
const getNumbers = state => state.jokesFilter.number;

const getJokesFromCategory = createSelector(
  [getJokes, getCategories, getNumbers],
  (jokes, category, number) => {
    const filteredJokes = filterByCategory(jokes, category);
    if (number <= 0) return filteredJokes;

    return filteredJokes.slice(0, number);
  }
);

const filterByCategory = (jokes, category) => {
  if (!category) return jokes;
  return jokes.filter(joke => {
    if (!joke.category) return false;

    return joke.category.includes(category);
  });
};

export default getJokesFromCategory;

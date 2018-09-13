import { createSelector } from "reselect";

const getJokes = state => state.jokes;
const getCategories = state => state.jokesFilter.category;
const getNumbers = state => state.jokesFilter.number;

const getJokesFromCategory = createSelector(
  [getJokes, getCategories, getNumbers],
  (jokes, category, number) => {
    console.log(category);
    return jokes;
    //return jokes.filter(joke => joke.category.includes(category));
  }
);

export default getJokesFromCategory;

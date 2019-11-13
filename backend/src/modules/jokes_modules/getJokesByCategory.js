import { getJokesCollection } from "../db_modules/dbClientConnect.js";

export const getJokesByCategory = async (selectedCategory, numberOfPage) => {
  const jokesCollection = getJokesCollection();
  const categoryQuery = setCategoryQuery(selectedCategory);

  let jokes = await jokesCollection.find(categoryQuery).toArray();

  if (numberOfPage !== undefined) {
    jokes = getJokesForPageNumber(jokes, numberOfPage);
  }
  return jokes;
};

const setCategoryQuery = selectedCategory => {
  if (selectedCategory !== "all") {
    return { categories: selectedCategory };
  }
  return {};
};

const getJokesForPageNumber = (jokes, numberOfPage) => {
  const numberOfResults = jokes.length;
  jokes = jokes.slice((numberOfPage - 1) * 20, numberOfPage * 20 - 1);
  jokes.push(numberOfResults);
  return jokes;
};

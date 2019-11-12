import { getJokesCollection } from "../db_modules/dbClientConnect.js";

export const getJokesByCategory = async (selectedCategory, numberOfPage) => {
  const jokesCollection = getJokesCollection();
  let categoryQuery = {};

  if (selectedCategory !== "all") {
    categoryQuery = { categories: selectedCategory };
  }
  let jokes = await jokesCollection.find(categoryQuery).toArray();
  if (numberOfPage !== undefined) {
    const numberOfResults = jokes.length;
    jokes = jokes.slice((numberOfPage - 1) * 20, numberOfPage * 20 - 1);
    jokes.push(numberOfResults);
  }
  return jokes;
};

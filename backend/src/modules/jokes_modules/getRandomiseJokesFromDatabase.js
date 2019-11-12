import { getJokesCollection } from "../db_modules/dbClientConnect.js";

export const getRandomiseJokesFromDatabase = async objOfParams => {
  const jokesCollection = getJokesCollection();

  let categoryQuery = {};
  if (objOfParams.selectedCategory !== "all") {
    categoryQuery = { categories: objOfParams.selectedCategory };
  }

  let searchInputTextQuery = {};
  if (objOfParams.searchInputText !== "empty_search_input") {
    searchInputTextQuery = {
      value: new RegExp(objOfParams.searchInputText, "gi")
    };
  }

  const numberOfJokesQuery = { size: parseInt(objOfParams.numberOfJokes) };

  return await jokesCollection
    .aggregate([
      { $match: searchInputTextQuery },
      { $match: categoryQuery },
      { $sample: numberOfJokesQuery }
    ])
    .toArray();
};

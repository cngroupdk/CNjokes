import { getJokesCollection } from "../db_modules/dbClientConnect.js";

export const getRandomiseJokesFromDatabase = async objOfParams => {
  const jokesCollection = getJokesCollection();

  let categoryQuery = setCategoryQuery(objOfParams.selectedCategory);

  let searchInputTextQuery = setSearchInputTextQuery(
    objOfParams.searchInputText
  );

  const numberOfJokesQuery = { size: parseInt(objOfParams.numberOfJokes) };

  return await jokesCollection
    .aggregate([
      { $match: searchInputTextQuery },
      { $match: categoryQuery },
      { $sample: numberOfJokesQuery }
    ])
    .toArray();
};

const setCategoryQuery = selectedCategory => {
  if (selectedCategory !== "all") {
    return { categories: selectedCategory };
  }
  return {};
};

const setSearchInputTextQuery = searchInputText => {
  if (searchInputText !== "empty_search_input") {
    return { value: new RegExp(searchInputText, "gi") };
  }
  return {};
};

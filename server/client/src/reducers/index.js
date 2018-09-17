import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import jokes from "./jokesReducer";
import jokeOptions from "./jokeOptionsReducer";

export default combineReducers({
  categories,
  jokes,
  jokeOptions
});

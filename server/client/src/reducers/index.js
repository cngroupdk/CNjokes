import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import jokes from "./jokesReducer";
import jokeOptions from "./jokeOptionsReducer";
import error from './errorReducer';

export default combineReducers({
  categories,
  jokes,
  jokeOptions,
  error
});

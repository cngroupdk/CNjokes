import { combineReducers } from "redux";
import categories from "./categoriesReducer";
import randomJoke from "./randomJokeReducer";
import jokes from "./jokesReducer";
import jokesFilter from "./jokesFilterReducer";

export default combineReducers({
  categories,
  randomJoke,
  jokes,
  jokesFilter
});

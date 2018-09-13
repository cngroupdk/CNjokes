import {
  //FETCH_RANDOM_JOKE,
  //SEARCH_JOKE,
  FETCH_ALL_JOKES
} from "../actions/actionTypes";

const jokes = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_JOKES:
      return [...action.payload];
    /* case FETCH_RANDOM_JOKE:
      return [action.payload];
    case SEARCH_JOKE:
      return [...action.payload.result].slice(0, 25); */
    default:
      return state;
  }
};

export default jokes;

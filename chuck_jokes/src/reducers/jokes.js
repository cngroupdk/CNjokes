import { FETCH_RANDOM_JOKE, SEARCH_JOKE } from "../actions/actionTypes";

const jokes = (state = [], action) => {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return [action.payload];
    case SEARCH_JOKE:
      console.log(action.payload.result);
      return [...action.payload.result];
    default:
      return state;
  }
};

export default jokes;

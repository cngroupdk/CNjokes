import { FETCH_RANDOM_JOKE } from "../actions/actionTypes";

const jokes = (state = [], action) => {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return action.payload;
    default:
      return state;
  }
};

export default jokes;

import { SELECT_CATEGORY } from "../actions/actionTypes";

const jokes = (state = null, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default jokes;

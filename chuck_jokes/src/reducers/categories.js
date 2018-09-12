import { FETCH_CATEGORIES } from "../actions/actionTypes";

const categores = (state = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
};

export default categores;
import { FETCH_CATEGORIES } from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.payload;
    default:
      return state;
  }
}

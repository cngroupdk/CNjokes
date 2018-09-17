import { FETCH_RANDOM_JOKE } from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return action.payload;
    default:
      return state;
  }
}
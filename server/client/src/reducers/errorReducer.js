import { ERROR } from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
    case ERROR:
      return action.payload;
    default:
      return state;
  }
}

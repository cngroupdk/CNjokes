import { ERROR } from "../actions/actionTypes";

export default function(state = null, action) {
  switch (action.type) {
    case ERROR:
      console.log(action);

      return action.payload;
    default:
      return state;
  }
}

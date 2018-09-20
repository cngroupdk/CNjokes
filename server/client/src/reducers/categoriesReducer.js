import { FETCH_CATEGORIES } from "../actions/actionTypes";
export const initialState = [];
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}

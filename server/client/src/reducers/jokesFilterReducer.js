import { SELECT_CATEGORY, SET_NUMBER } from "../actions/actionTypes";

const initialState = {
  category: null,
  number: 1,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case SET_NUMBER:
      return { ...state, number: action.payload };
    default:
      return state;
  }
}

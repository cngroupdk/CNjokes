import {
  SELECT_CATEGORY,
  SET_NUMBER,
  SET_IS_RANDOM,
} from '../actions/actionTypes';

export const initialState = {
  category: null,
  limit: 100,
  random: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CATEGORY:
      return { ...state, category: action.payload };
    case SET_NUMBER:
      return { ...state, limit: action.payload };
    case SET_IS_RANDOM:
      return { ...state, random: action.payload };
    default:
      return state;
  }
}

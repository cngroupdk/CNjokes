import {
  FETCH_JOKES,
  SEARCH_JOKES,
  FETCH_RANDOM_JOKE,
  CLEAR_JOKES_ARRAY,
  RESTART_PAGINATION_SETTINGS
} from "../actions/actionTypes";

const initialState = {
  data: [],
  perPage: 15,
  page: 1,
  pages: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_RANDOM_JOKE:
      return action.payload;
    case FETCH_JOKES:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pages: action.payload.pages
      };
    case SEARCH_JOKES:
      return action.payload;
    case CLEAR_JOKES_ARRAY:
      return { ...state, data: [] };
    case RESTART_PAGINATION_SETTINGS:
      return initialState;
    default:
      return state;
  }
}

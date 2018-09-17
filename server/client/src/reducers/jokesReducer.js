import { FETCH_JOKES, SEARCH_JOKES } from "../actions/actionTypes";

const initialState = {
  data: [],
  limit: 100,
  perPage: 10,
  page: 1,
  pages: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_JOKES:
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        pages: action.payload.pages
      };
    case SEARCH_JOKES:
      return action.payload;
    default:
      return state;
  }
}

import { SET_JOKE } from './actions';
import { SET_SEARCHED_JOKES } from './actions';
import { SET_JOKES_LOADING } from './actions';
import { SET_QUERY_INVALID } from './actions';
import { SET_QUERY_VALID } from './actions';
import { SET_QUERY } from './actions';
import { SET_CATEGORY } from './actions';
import { SET_CATEGORIES } from './actions';

const initialState = {
  // SpecialJokeBlock
  selectedJoke: 'Loading some CN joke...',
  // SearchBlock
  query: '',
  searchedJokes: [],
  isQueryValid: false,
  loaded: false,
  // CategoryBlock
  count: 4,
  category: 'all',
  jokes: [],
  categories: [],
  jokesLoaded: false,
  hasDuplicateJokes: true,
};

function jokeReducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch (action.type) {
    // SpecialJokeBlock
    case SET_JOKE:
      return {
        ...state,
        selectedJoke: [action.data.value],
      };

    // SearchBlock
    case SET_SEARCHED_JOKES:
      return {
        ...state,
        loaded: true,
        searchedJokes: action.data.result,
      };

    case SET_JOKES_LOADING:
      return {
        ...state,
        loaded: false,
        searchedJokes: [],
      };

    case SET_QUERY_INVALID:
      return {
        ...state,
        isQueryValid: false,
      };

    case SET_QUERY_VALID:
      return {
        ...state,
        isQueryValid: true,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.query,
      };

    // CategoryBlock
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.data,
      };

    default:
      return state;
  }
}

export default jokeReducer;

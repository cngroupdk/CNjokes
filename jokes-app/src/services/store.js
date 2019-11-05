import { createStore } from 'redux';
import jokeReducer from './reducers';

export default createStore(
  jokeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

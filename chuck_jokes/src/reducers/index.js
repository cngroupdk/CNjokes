import { combineReducers } from 'redux';
import jokes from './jokes';
import categories from './categories';
import jokesFilter from './jokesFilter';

export default combineReducers({
    jokes,
    categories,
    jokesFilter
})
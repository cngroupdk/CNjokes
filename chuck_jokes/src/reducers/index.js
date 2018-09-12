import { combineReducers } from 'redux';
import jokes from './jokes';
import categories from './categories';

export default combineReducers({
    jokes,
    categories
})
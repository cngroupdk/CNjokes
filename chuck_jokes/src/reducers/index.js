import { combineReducers } from 'redux';
import jokes from './jokes';
import categories from './categories';
import selectedCategory from './selectedCategory';

export default combineReducers({
    jokes,
    categories,
    selectedCategory
})
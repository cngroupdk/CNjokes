import expect from 'unexpected';
import reducer, { initialState } from '../categoriesReducer';
// import { fetchCategories } from '../../actions';

describe('Categories reducer', () => {
    it('returns default state on init', () => {
        const action = { type: '@@INIT' }; 
        const stateAfter = reducer(undefined, action);
        expect(stateAfter, 'to be', initialState);
    });
    it('saves joke categories to state', () => {
        const action = { type: 'FETCH_CATEGORIES', payload: ['joke', 'anotherjoke'] }; 
        const stateAfter = reducer(initialState, action);
        expect(stateAfter, 'to equal', ['joke', 'anotherjoke']);
    });
});


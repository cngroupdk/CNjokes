import expect from "unexpected";
import { SET_IS_RANDOM, SET_NUMBER } from "../../actions/actionTypes";
import reducer, { initialState } from "../../reducers/jokeOptionsReducer";
import {setNumber} from "../../actions";

describe('Joke options reducer', ()=> {
    it('returns default state on init', ()=>{
        const action = { type: '@@INIT' }; 
        const stateAfter = reducer(undefined, action);
        expect(stateAfter, 'to be', initialState);
    })
    it('set number of display number input', () => {
        const action = {type : SET_NUMBER, payload : 2};
        const stateAfter = reducer(undefined, setNumber(2));
        expect(stateAfter, 'to equal', {...initialState, limit : 2});
    })
})

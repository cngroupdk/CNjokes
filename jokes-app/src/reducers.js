import { SET_JOKE } from "./actions";

const initialState = {
  selectedJoke: "Loading some CN joke..."
};

function setJokeReducer(state = initialState, action) {
  console.log("reducer", state, action);

  switch (action.type) {
    case SET_JOKE:
      return {
        ...state,
        selectedJoke: [action.data.value]
      };
    default:
      return state;
  }
}

export default setJokeReducer;

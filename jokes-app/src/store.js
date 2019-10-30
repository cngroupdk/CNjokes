import { createStore } from "redux";
import jokeReducer from "./reducers";

export default createStore(jokeReducer);

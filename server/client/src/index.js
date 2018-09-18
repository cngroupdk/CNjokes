import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import reducers from "./reducers";

const allowReduxDevtoolExtension = process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = allowReduxDevtoolExtension ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

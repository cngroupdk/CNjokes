import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const allowReduxDevtoolExtension =
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = allowReduxDevtoolExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;
const enhancer = composeEnhancers(applyMiddleware(reduxThunk));
const store = createStore(reducers, enhancer);

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

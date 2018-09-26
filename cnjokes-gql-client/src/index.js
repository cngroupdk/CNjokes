import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://gentle-headland-61682.herokuapp.com/graphql",
  clientState: {
    defaults: {
      displayNumber: {
        __typename: "displayNumber",
        limit: "1"
      },
      selectedCategory: {
        __typename: "selectedCategory",
        name: ""
      },
      searchTerm: {
        __typename: "searchTerm",
        value: ""
      }
    },
    resolvers: {
      Query: {},
      Mutation: {
        updateDisplayNumber: (_, { limit }, { cache }) => {
          cache.writeData({
            data: {
              displayNumber: {
                __typename: "displayNumber",
                limit
              }
            }
          });
          return null;
        },
        updateSelectedCategory: (_, { name }, { cache }) => {
          cache.writeData({
            data: {
              selectedCategory: {
                __typename: "selectedCategory",
                name
              }
            }
          });
          return null;
        },
        updateSearchterm: (_, { value }, { cache }) => {
          cache.writeData({
            data: {
              searchTerm: {
                __typename: "searchTerm",
                value
              }
            }
          });
          return null;
        }
      }
    }
  }
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById("root"));
registerServiceWorker();

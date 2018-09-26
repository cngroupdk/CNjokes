import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Joke from "./Joke";

const GET_RANDOM_JOKE = gql`
  query {
    randomJoke {
      value
    }
  }
`;

const GET_JOKES_IN_CATEGORY = gql`
  query {
    jokesInCategory(category: "dev", limit: 3) {
      value
    }
  }
`;

const SEARCH_JOKES = gql`
  query {
    searchJokes(query: "car") {
      value
    }
  }
`;

const GET_SEARCH_TERM = gql`
  query {
    searchTerm @client {
      value
    }
  }
`;

const renderJokes = jokes => {
  return (
    <div>
      <ul className="jokes">
        {jokes.map((joke, index) => (
          <li key={index}>
            <Joke {...joke} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Jokes = () => (
  <Query query={GET_SEARCH_TERM}>
    {({ data: { loading, searchTerm } }) => {
      if (loading) return <p>Loading...</p>;
      const query = searchTerm.value;
      if (query && query.length > 0) {
        return (
          <Query query={SEARCH_JOKES} variables={{ query }}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;
              return renderJokes(data.searchJokes);
            }}
          </Query>
        );
      } else {
        return (
          <Query query={GET_RANDOM_JOKE}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;
              return renderJokes(data.randomJoke);
            }}
          </Query>
        );
      }
    }}
  </Query>
);

export default Jokes;

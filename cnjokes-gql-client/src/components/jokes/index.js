import React, { Component } from "react";
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

const GET_FILTER_SETTINGS = gql`
  query {
    selectedCategory @client {
      name
    }
    searchTerm @client {
      value
    }
    displayNumber @client {
      limit
    }
  }
`;

const SEARCH_JOKES = gql`
  query getCategory(
    $categoryName: String
    $limit: Int = 10
    $offset: Int = 0
    $searchString: String
  ) {
    category(name: $categoryName) {
      name
      jokes(limit: $limit, offset: $offset, searchString: $searchString) {
        value
      }
      total
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

class Jokes extends Component {
  state = { loadMore: false };

  render() {
    return (
      <Query query={GET_FILTER_SETTINGS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;
          console.log(data);
          const { displayNumber, searchTerm, selectedCategory } = data;
          return (
            <Query
              query={SEARCH_JOKES}
              variables={{
                categoryName: selectedCategory.name,
                limit: displayNumber.limit,
                searchString: searchTerm.value
              }}
            >
              {({ loading, error, data }) => {
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error :(</div>;
                console.log(data.category);
                const { jokes, name } = data.category;
                return renderJokes(jokes);
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default Jokes;

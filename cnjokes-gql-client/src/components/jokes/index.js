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

const GET_JOKES_IN_CATEGORY = gql`
  query JokesInCategory($category: String!, $limit: Int!) {
    jokesInCategory(category: $category, limit: $limit) {
      value
    }
  }
`;

const SEARCH_JOKES = gql`
  query SearchJokes($query: String!) {
    searchJokes(query: $query) {
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

const GET_SELECTED_CATEGORY = gql`
  query {
    selectedCategory @client {
      name
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
      // if search term is not empty string
      // use SEARCH_JOKES query
      <Query query={GET_SEARCH_TERM}>
        {({ data: { loading, searchTerm } }) => {
          if (loading) return <p>Loading...</p>;
          const query = searchTerm.value;
          if (query && query.length > 0) {
            return (
              // query returns max 25 jokes
              <Query query={SEARCH_JOKES} variables={{ query }}>
                {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return <div>Error :(</div>;
                  return renderJokes(data.searchJokes);
                }}
              </Query>
            );
          } else {
            // if search term is empty string
            // use GET_SELECTED_CATEGORY query
            return (
              <Query query={GET_SELECTED_CATEGORY}>
                {({ data: { loading, selectedCategory } }) => {
                  if (loading) return <p>Loading...</p>;
                  const selected = selectedCategory.name;
                  // if loardMore is false
                  // use GET_RANDOM_JOKE query
                  if (!this.state.loadMore) {
                    return (
                      <Query query={GET_RANDOM_JOKE}>
                        {({ loading, error, data }) => {
                          if (loading) return <div>Loading...</div>;
                          if (error) return <div>Error :(</div>;
                          return (
                            <div>
                              {renderJokes(data.randomJoke)}
                              <div className="load-more-container">
                                <a
                                  onClick={() =>
                                    this.setState({
                                      loadMore: true
                                    })
                                  }
                                >
                                  Load more...
                                </a>
                              </div>
                            </div>
                          );
                        }}
                      </Query>
                    );
                  } else {
                    console.log(this.state);
                    // if loadmore is true
                    // use GET_JOKES_IN_CATEGORY query
                    return (
                      <Query
                        query={GET_JOKES_IN_CATEGORY}
                        variables={{ category: selected, limit: 100 }}
                      >
                        {({ loading, error, data }) => {
                          if (loading) return <div>Loading...</div>;
                          if (error) return <div>Error :(</div>;
                          return renderJokes(data.jokesInCategory);
                        }}
                      </Query>
                    );
                  }
                }}
              </Query>
            );
          }
        }}
      </Query>
    );
  }
}

export default Jokes;

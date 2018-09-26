import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Joke from './Joke';

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

const renderJokes = (jokes, fetchMore, categoryName) => {
  return (
    <div
      entries={jokes || []}
      onLoadMore={() =>
        fetchMore({
          variables: {
            limit: 10,
            offset: jokes.length,
            categoryName: categoryName,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              jokes: [...prev.jokes, ...fetchMoreResult.jokes],
            });
          },
        })
      }
    >
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

const JokeList = ({ entries = [], onLoadMore }) => {
  if (entries && entries.length) {
    return (
      <div>
        <ul>
          {entries.map((joke, index) => {
            return (
              <li key={index}>
                <Joke {...joke} />
              </li>
            );
          })}
        </ul>
        <button onClick={onLoadMore}>Load more</button>
      </div>
    );
  }
  return <div />;
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
                offset: 0,
                categoryName: selectedCategory.name,
                limit: 3,
                searchString: searchTerm.value,
              }}
            >
              {({ loading, error, data, fetchMore }) => {
                console.log(fetchMore);
                if (loading) return <div>Loading...</div>;
                if (error) return <div>Error :(</div>;
                const { jokes, name } = data.category;
                return (
                  <JokeList
                    entries={jokes || []}
                    onLoadMore={() =>
                      fetchMore({
                        variables: {
                          offset: jokes.length,
                          categoryName: name,
                          limit: 3,
                          searchString: searchTerm.value,
                        },
                        updateQuery: (prev, { fetchMoreResult }) => {
                          console.log(prev);
                          if (!fetchMoreResult) return prev;
                          return Object.assign({}, prev, {
                            category: {
                              ...prev.category,
                              jokes: [
                                ...prev.category.jokes,
                                ...fetchMoreResult.category.jokes,
                              ],
                            },
                          });
                        },
                      })
                    }
                  />
                );
              }}
            </Query>
          );
        }}
      </Query>
    );
  }
}

export default Jokes;

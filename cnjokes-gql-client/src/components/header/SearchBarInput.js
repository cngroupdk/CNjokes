import React from "react";
import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

const GET_SEARCH_TERM = gql`
  query {
    searchTerm @client {
      value
    }
  }
`;

const SearchBarInput = ({ mutate }) => (
  <Query query={GET_SEARCH_TERM}>
    {({ data: { loading, searchTerm } }) => {
      if (loading) return <p>Loading...</p>;

      console.log(searchTerm.value);

      return (
        <div className="search-bar">
          <input
            placeholder="Search jokes"
            value={searchTerm.value}
            onChange={e =>
              mutate({
                variables: {
                  value: e.target.value
                }
              })
            }
          />
        </div>
      );
    }}
  </Query>
);

const updateSearchterm = gql`
  mutation($value: String) {
    updateSearchterm(value: $value) @client
  }
`;

export default compose(graphql(updateSearchterm))(SearchBarInput);

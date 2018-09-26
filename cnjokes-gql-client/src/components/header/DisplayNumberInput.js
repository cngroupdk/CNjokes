import React from "react";
import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

const GET_DISPLAY_LIMIT = gql`
  query {
    displayNumber @client {
      limit
    }
  }
`;

const SearchBar = ({ mutate }) => (
  <Query query={GET_DISPLAY_LIMIT}>
    {({ data: { loading, displayNumber } }) => {
      if (loading) return <p>Loading...</p>;

      return (
        <div className="display-number-bar">
          <input
            type="number"
            placeholder="Number of jokes"
            value={parseInt(displayNumber.limit)}
            min={1}
            onChange={e =>
              mutate({
                variables: {
                  limit: isNaN(e.target.value) ? "" : e.target.value.toString()
                }
              })
            }
          />
        </div>
      );
    }}
  </Query>
);

const updateDisplayLimit = gql`
  mutation($limit: String) {
    updateDisplayNumber(limit: $limit) @client
  }
`;

export default compose(graphql(updateDisplayLimit))(SearchBar);

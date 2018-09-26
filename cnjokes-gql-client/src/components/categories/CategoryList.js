import React from "react";
import { gql } from "apollo-boost";
import { graphql, compose, Query } from "react-apollo";

const GET_SELECTED_CATEGORY = gql`
  query {
    selectedCategory @client {
      name
    }
  }
`;

const CategoryList = ({ mutate, categories }) => (
  <Query query={GET_SELECTED_CATEGORY}>
    {({ data: { loading, selectedCategory } }) => {
      if (loading) return <p>Loading...</p>;

      const selected = selectedCategory.name;

      return (
        <div>
          {categories.map((category, index) => (
            <div
              onClick={() =>
                mutate({
                  variables: {
                    name: category.name
                  }
                })
              }
              key={index}
              className={`row category-item ${
                category.name === selected ? "active" : ""
              }`}
            >
              {category.name}
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

const updateSelectedCategory = gql`
  mutation($name: String) {
    updateSelectedCategory(name: $name) @client
  }
`;

export default compose(graphql(updateSelectedCategory))(CategoryList);

import "./categories.css";
import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CategoryList from "./CategoryList";

const GET_CATEGORIES = gql`
  query {
    categories {
      name
    }
  }
`;

const Categories = () => (
  <Query query={GET_CATEGORIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;
      return (
        <div className="column">
          <h2>Categories</h2>
          <CategoryList categories={data.categories} />
        </div>
      );
    }}
  </Query>
);

export default Categories;

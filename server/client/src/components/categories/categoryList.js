import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchCategories,
  selectCategory,
  fetchRandomJoke
} from "../../actions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  getJokesForSelectedCategory(category) {
    this.props.selectCategory(category);
    this.props.fetchRandomJoke(category);
  }

  render() {
    const { categories, selectedCategory } = this.props;

    return (
      <div>
        {categories &&
          categories.map((category, index) => {
            return (
              <div
                onClick={() => this.getJokesForSelectedCategory(category.name)}
                key={index}
                className={`row category-item ${
                  category.name === selectedCategory ? "active" : ""
                }`}
              >
                {category.name}
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    selectedCategory: state.jokeOptions.category
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories, selectCategory, fetchRandomJoke }
)(CategoryList);

import React, { Component } from "react";
import { connect } from "react-redux";

import CategoryListItem from "./categoryListItem";
import { fetchCategories, selectCategory, fetchRandomJoke } from "../../actions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  getJokesForSelectedCategory(category) {
    console.log(category);
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
              <CategoryListItem
                categoryName={category.name}
                key={index}
                selectCategory={this.getJokesForSelectedCategory.bind(this)
                }
                selectedCategory={selectedCategory}
              />
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

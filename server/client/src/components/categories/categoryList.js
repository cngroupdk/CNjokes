import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryListItem from './categoryListItem';
import {
  fetchCategories,
  selectCategory,
  fetchJokes,
} from '../../actions';

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const {
      categories,
      selectedCategory,
      selectCategory,
      fetchAllJokes,
    } = this.props;
    return (
      <div>
        {categories &&
          categories.map((category, index) => {
            return (
              <CategoryListItem
                categoryName={category.name}
                key={index}
                selectCategory={selectCategory}
                selectedCategory={selectedCategory}
                fetchJokes={fetchJokes}
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
    selectedCategory: state.jokesFilter.category,
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories, selectCategory, fetchJokes },
)(CategoryList);
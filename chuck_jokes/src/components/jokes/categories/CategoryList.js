import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryListItem from './CategoryListItem';
import { fetchCategories, selectCategory } from '../../../actions';

class CategoryList extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, selectedCategory, selectCategory } = this.props;
    return (
      <div>
        {categories &&
          categories.map((category, index) => {
            return (
              <CategoryListItem
                categoryName={category}
                key={index}
                selectCategory={selectCategory}
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
    selectedCategory: state.jokesFilter.category,
  };
};

export default connect(
  mapStateToProps,
  { fetchCategories, selectCategory },
)(CategoryList);

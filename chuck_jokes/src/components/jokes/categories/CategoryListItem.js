import React, { Component } from 'react';

class CategoryListItem extends Component {
  fetchJokes() {
    const { fetchAllJokes, selectCategory, categoryName } = this.props;
    fetchAllJokes();
    selectCategory(categoryName);
  }
  render() {
    const { categoryName, selectedCategory } = this.props;
    return (
      <div
        onClick={this.fetchJokes.bind(this)}
        className={`row category-item ${
          categoryName === selectedCategory ? 'active' : ''
        }`}
      >
        {categoryName}
      </div>
    );
  }
}

export default CategoryListItem;

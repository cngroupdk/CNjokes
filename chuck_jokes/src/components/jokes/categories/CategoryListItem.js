import React, { Component } from 'react';

class CategoryListItem extends Component {
  render() {
    const { categoryName, selectedCategory, selectCategory } = this.props;
    return (
      <div
        onClick={() => selectCategory(categoryName)}
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

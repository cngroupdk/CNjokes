import React, { Component } from "react";

class CategoryListItem extends Component {
  render() {
    const { categoryName, category, selectCategory } = this.props;
    return (
      <div
        onClick={() => selectCategory(categoryName)}
        className={`row category-item ${
          categoryName === category ? "active" : ""
        }`}
      >
        {categoryName}
      </div>
    );
  }
}

export default CategoryListItem;

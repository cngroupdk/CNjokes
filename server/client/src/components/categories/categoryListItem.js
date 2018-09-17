import React, { Component } from "react";

const CategoryListItem = props => {
  const { categoryName, selectCategory, selectedCategory } = props;

  return (
    <div
      onClick={e => selectCategory(categoryName)}
      className={`row category-item ${
        categoryName === selectedCategory ? "active" : ""
      }`}
    >
      {categoryName}
    </div>
  );
};

export default CategoryListItem;

import React from "react";

function CategoriesList({ categories, categorySetter, selectedCategory }) {
  return (
    <div className="category-container">
      <ul>
        {categories.map(categoryName => {
          return (
            <li
              key={categoryName}
              onClick={() => categorySetter(categoryName)}
              className={categoryName === selectedCategory ? "selected" : ""}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoriesList;

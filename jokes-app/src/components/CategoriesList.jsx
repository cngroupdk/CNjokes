import React from 'react';

function CategoriesList({ categories, categorySetter, selectedCategory }) {
  const categorySelected = event => {
    categorySetter(event.target.value);
  };

  return (
    <>
      <div className="category-container">
        <ul>
          {categories.map(categoryName => {
            return (
              <li
                key={categoryName}
                onClick={() => categorySetter(categoryName)}
                className={categoryName === selectedCategory ? 'selected' : ''}
              >
                {categoryName}
              </li>
            );
          })}
        </ul>
      </div>

      <select onChange={categorySelected} className="categories-select">
        {categories.map(categoryName => {
          return (
            <option value={categoryName} key={categoryName}>
              {categoryName}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default CategoriesList;

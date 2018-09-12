import React, { Component } from 'react';
import CategoryList from './categoryList';

class Categories extends Component {
  render() {
    return (
      <div className="column">
        <h2>Categories</h2>
        <CategoryList />
      </div>
    );
  }
}

export default Categories;

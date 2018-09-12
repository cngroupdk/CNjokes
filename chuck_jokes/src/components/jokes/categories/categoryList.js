import React, { Component } from 'react';
import CategoryListItem from './categoryListItem';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </div>
    );
  }
}

export default CategoryList;

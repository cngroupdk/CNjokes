import React, { Component } from 'react';
import CategoryList from './CategoryList';
import './categories.css';

class Categories extends Component {
  render() {
    return (
      <div className="column">
        <button className="random-joke-button">Get Random JOKE</button>
        <h2>Categories</h2>
        <CategoryList />
      </div>
    );
  }
}

export default Categories;

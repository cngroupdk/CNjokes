import React, { Component } from 'react';
import CategoryList from './CategoryList';
import './categories.css';

import { connect } from 'react-redux';
import { fetchRandomJoke, selectCategory } from '../../../actions';

class Categories extends Component {
  render() {
    return (
      <div className="column">
        <button
          onClick={() => {
            this.props.fetchRandomJoke();
            this.props.selectCategory(null);
          }}
          className="random-joke-button"
        >
          Get Random JOKE
        </button>
        <h2>Categories</h2>
        <CategoryList />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomJoke, selectCategory },
)(Categories);

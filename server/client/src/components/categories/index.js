import React, { Component } from 'react';
import CategoryList from './categoryList';
import './categories.css';

import { connect } from 'react-redux';
import { fetchRandomJoke, selectCategory, setNumber } from '../../actions';

class Categories extends Component {
  getRandomJoke = () => {
    this.props.fetchRandomJoke();
    this.props.selectCategory(null);
    this.props.setNumber(1);
  };
  render() {
    return (
      <div className="column">
        {/* <button onClick={this.getRandomJoke} className="random-joke-button">
          Get Random JOKE
        </button> */}
        <h2>Categories</h2>
        <CategoryList />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchRandomJoke, selectCategory, setNumber },
)(Categories);
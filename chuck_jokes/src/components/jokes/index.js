<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllJokes } from "../../actions";
import getJokesFromCategory from "../../selectors/jokesSelector";
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllJokes } from '../../actions';
>>>>>>> f48d44e2854b31f2b097a7fc5408a8bee34b694f

import Categories from './categories';
import JokesList from './jokesList';

class Jokes extends Component {
  componentDidMount() {
    console.log('jokes loaded fetching...');
    this.props.fetchAllJokes();
  }

  render() {
    const { categories, jokes, selectedCategory } = this.props;

    return (
      <div className="row">
        <div className="columnCategory">
          {categories && <Categories data={categories} />}
        </div>
        <div className="columnJoke">
          {jokes && (
            <JokesList data={jokes} selectedCategory={selectedCategory} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
<<<<<<< HEAD
    categories: state.categories,
    jokes: getJokesFromCategory(state),
    selectedCategory: state.jokesFilter.category
=======
    categories,
    jokes,
    selectedCategory,
>>>>>>> f48d44e2854b31f2b097a7fc5408a8bee34b694f
  };
};

export default connect(
  mapStateToProps,
  { fetchAllJokes },
)(Jokes);

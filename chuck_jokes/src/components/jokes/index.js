import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllJokes } from "../../actions";
import getJokesFromCategory from "../../selectors/jokesSelector";

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
    categories: state.categories,
    jokes: getJokesFromCategory(state),
    selectedCategory: state.jokesFilter.category
  };
};

export default connect(
  mapStateToProps,
  { fetchAllJokes },
)(Jokes);

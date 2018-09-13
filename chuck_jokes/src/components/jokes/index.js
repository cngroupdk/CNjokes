import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllJokes } from "../../actions";

import Categories from "./categories";
import JokesList from "./jokesList";

class Jokes extends Component {
  componentDidMount() {
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
  const { categories, jokes, selectedCategory } = state;
  return {
    categories,
    jokes,
    selectedCategory
  };
};

export default connect(
  mapStateToProps,
  { fetchAllJokes }
)(Jokes);

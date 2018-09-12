import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomJoke } from "../../actions";

import Categories from "./categories";
import JokeList from "./JokesList";

class Jokes extends Component {
  componentDidMount() {
    this.props.fetchRandomJoke();
  }

  render() {
    const { categories, jokes } = this.props;

    return (
      <div className="row">
        <div className="columnCategory">
          <Categories data={categories} />
        </div>
        <div className="columnJoke">{jokes && <JokeList data={jokes} />}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories, jokes } = state;
  return {
    categories,
    jokes
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomJoke }
)(Jokes);

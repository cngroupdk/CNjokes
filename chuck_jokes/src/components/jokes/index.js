<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomJoke } from "../../actions";

import JokeList from "./JokesList";

class Jokes extends Component {
  componentDidMount() {
    this.props.fetchRandomJoke();
  }

  render() {
    const { jokes } = this.props;

    return <div>{jokes && <JokeList data={jokes} />}</div>;
  }
}

const mapStateToProps = state => {
  return {
    jokes: state.jokes
  };
};

export default connect(
  mapStateToProps,
  { fetchRandomJoke }
)(Jokes);
=======
import React, { Component } from 'react';

import Categories from './categories';
import JokeDisplay from './jokeDisplay';

class Jokes extends Component {
  render() {
    return (
      <div className="row">
        <div className="columnCategory">
          <Categories />
        </div>
        <div className="columnJoke">
          <JokeDisplay />
        </div>
      </div>
    );
  }
}

export default Jokes;
>>>>>>> 1cc0a0cfb013422bce0bb62e69e50e5e745363c3

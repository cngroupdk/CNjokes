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

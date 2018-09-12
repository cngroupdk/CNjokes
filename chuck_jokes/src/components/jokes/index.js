import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomJoke } from "../../actions";

import Categories from './categories';
import JokeList from "./JokesList";

class Jokes extends Component {
  componentDidMount() {
    this.props.fetchRandomJoke();
  }

  render() {
    const { jokes } = this.props;
    
    

    return (
      <div className="row">
        <div className="columnCategory">
          <Categories />
        </div>
        <div className="columnJoke">
          {jokes && <JokeList data={jokes} />}
        </div>
      </div>);
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

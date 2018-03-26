import React, { Component } from "react";
import PropTypes from 'prop-types';

import Joke from "../../components/Joke/Joke";

import "./jokes.css";

import jokes from  "../../mockdata/jokes.json";
import Button from "../../components/Button/Button"

class Jokes extends Component {
  render() {
    const { jokeList } = this.props;
    let jokes = (
      <div className="jokes-area">
        {jokeList.map(joke => {
          return <Joke key={joke.id} text={joke.value} />;
        })}
      </div>
    );

    return <div className="jokes-background">{jokes}</div>;
  }
}

Jokes.propTypes = {
  jokeList: PropTypes.array,
};

export default Jokes;

import React, { Component } from "react";
import Joke from "../../components/Joke/Joke";

import "./Jokes.css";

import jokes from  "../../mockdata/jokes.json";
import Button from "../../components/Button/Button"

class Jokes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokeList: [3],
      numberOfJokes: 1
    }
  }


  render() {
    let jokes = (
      <div className="jokes-area">
        {this.state.jokeList.map(joke => {
          return <Joke key={joke.id} text={joke.text} />;
        })}
      </div>
    );

    return <div className="jokes-background">{jokes}</div>;
  }
}

export default Jokes;

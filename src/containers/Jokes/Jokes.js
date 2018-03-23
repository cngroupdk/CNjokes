import React, { Component } from "react";
import Joke from "../../components/Joke/Joke";

import "./Jokes.css";

import jokes from  "../../mockdata/jokes.json";

class Jokes extends Component {
  state = jokes;

  render() {
    let jokes = (
      <div className="jokes-area">
        {this.state.jokes.map(joke => {
          return <Joke key={joke.id} text={joke.text} />;
        })}
      </div>
    );

    return <div className="jokes-background">{jokes}</div>;
  }
}

export default Jokes;

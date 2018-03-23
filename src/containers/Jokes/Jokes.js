import React, { Component } from "react";
import Joke from "../../components/Joke/Joke";

import "./jokes.css";

import Jokes from  "../../mockdata/jokes.json";

class Jokes extends Component {
  state = Jokes;

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

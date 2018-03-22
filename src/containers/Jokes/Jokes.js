import React, { Component } from "react";
import Joke from "../../components/Joke/Joke";
import "./Jokes.css";

class Jokes extends Component {
  state = {
    jokes: [
      {
        id: 1,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 2,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 3,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 4,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 5,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 6,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 7,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 8,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 10,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      },
      {
        id: 9,
        text:
          "Chuck Norris once went to the Virgin Islands. Now they are just called The Islands"
      }
    ]
  };

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

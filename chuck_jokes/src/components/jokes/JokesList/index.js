import React, { Component } from 'react';
import JokeList from './jokeList';
import './jokeDisplay.css';

class JokeDisplay extends Component {
  render() {
    return (
      <div className="column">
        <div className="column">
          {/* This div is added to align header with joke list */}
          <h2>RandomJoke / Category name</h2>
        </div>
        <JokeList />
      </div>
    );
  }
}

export default JokeDisplay;

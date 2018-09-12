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

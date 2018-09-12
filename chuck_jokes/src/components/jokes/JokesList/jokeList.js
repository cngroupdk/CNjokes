import React, { Component } from 'react';
import JokeListItem from './jokeListItem';

class JokeList extends Component {
  render() {
    return (
      <div className="column">
        {/* These will be made into component */}
        <JokeListItem />
        <JokeListItem />
        <JokeListItem />
      </div>
    );
  }
}

export default JokeList;

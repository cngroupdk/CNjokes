import React, { Component } from "react";
import PropTypes from 'prop-types';

import Joke from "../../components/Joke/Joke";

import "./jokes.css";

class Jokes extends Component {
  render() {
    const { jokeList, handleSearch, searchInput, handleKeyPress, handleClearSCR } = this.props;
    
    let jokes = (
      <div className="jokes-area">
        {jokeList.map(joke => {
          return <Joke key={joke.id} text={joke.value} />;
        })}
      </div>
    );
    
    return (
      <div className="jokes-background">
        <span className="search-input">
          <button 
            className="button"
            onClick={handleClearSCR}>
            Clear SRC
          </button>
          <input 
            className="input-field"
            type="text" 
            placeholder="search for the first 25 jokes that match your input"
            value={searchInput} 
            onChange={handleSearch}
            onKeyPress={handleKeyPress}/>
        </span>
        {jokeList.length ? jokes : <div className="jokes-area"><Joke text="You thought this would clear the screen... And it almost did."/></div>}
      </div>
    );
  }
}

Jokes.propTypes = {
  jokeList: PropTypes.array,
  handleSearch: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleClearSCR: PropTypes.func.isRequired,
};

export default Jokes;

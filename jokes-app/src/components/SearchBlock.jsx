import React from "react";
import { api } from "../modules/api";
import JokesList from "./JokesList";

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchedJokes: [],
      isQueryValid: false,
      loaded: false
    };
  }

  fetchData = () => {
    this.setState({ loaded: false, searchedJokes: [] });
    api.fetchSearchedJokes(this.setJokesToState, this.state.query);
  };

  get25Jokes = jokesList => {
    return jokesList && jokesList.slice(0, 25).map(joke => joke.value);
  };

  setJokesToState = data => {
    this.setState({ loaded: true, searchedJokes: data.result });
  };

  handleQuery = () => {
    if (this.state.query.length < 3 || this.state.query.length > 120) {
      this.setState({ isQueryValid: false });
    } else {
      this.setState({ isQueryValid: true });
      this.fetchData();
    }
  };

  handleSearch = event => {
    this.setState({ query: event.target.value }, () => {
      this.handleQuery();
    });
  };

  render() {
    const listItems = this.get25Jokes(this.state.searchedJokes);

    return (
      <div className="search-block">
        <h2>Still not satisfied?</h2>
        <p>
          You can use this fulltext search to look for the jokes you're so eager
          to find. <span>&#10549;</span>
        </p>

        <div className="joke-search input-group">
          <div className="input-group-prepend">
            <span className="search-icon-box input-group-text ">
              <span className="search-icon">&#9740;</span>
            </span>
          </div>
          <input
            className="form-control search-input"
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleSearch}
          />
        </div>
        {!this.state.isQueryValid ? (
          <p>
            The word you seek for must have at least 3 characters and maximum
            120.
          </p>
        ) : (
          <JokesList
            loaded={this.state.loaded}
            jokes={listItems}
            hasDuplicates={false}
          />
        )}
      </div>
    );
  }
}

export default SearchBlock;

import React from "react";
import { api } from "../modules/api";
import { connect } from "react-redux";
import { setSearchedJokes } from "../actions";
import { setJokesLoading } from "../actions";
import { setQueryInvalid } from "../actions";
import { setQueryValid } from "../actions";
import { setQuery } from "../actions";
import JokesList from "./JokesList";

class SearchBlock extends React.Component {
  fetchData = () => {
    this.props.dispatch(setJokesLoading());
    api.fetchSearchedJokes(this.setJokesToState, this.props.query);
  };

  get25Jokes = jokesList => {
    return jokesList && jokesList.slice(0, 25).map(joke => joke.value);
  };

  setJokesToState = data => {
    this.props.dispatch(setSearchedJokes(data));
  };

  handleQuery = () => {
    const queryNoWhitespace = this.props.query.split(" ").join("");

    if (queryNoWhitespace.length < 3 || this.props.query.length > 120) {
      this.props.dispatch(setQueryInvalid());
    } else {
      this.props.dispatch(setQueryValid());
      this.fetchData();
    }
  };

  handleSearch = event => {
    this.props.dispatch(setQuery(event.target.value)); // how to solve the asynchronous function ?
    this.handleQuery(); // probable need to use Redux Thunk

    // this.setState({ query: event.target.value }, () => {
    //   this.handleQuery();
    // });
  };

  render() {
    const listItems = this.get25Jokes(this.props.searchedJokes);

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
            value={this.props.query}
            onChange={this.handleSearch}
          />
        </div>
        {!this.props.isQueryValid ? (
          <p>
            The word you seek for must have at least 3 characters and maximum
            120.
          </p>
        ) : (
          <JokesList
            loaded={this.props.loaded}
            jokes={listItems}
            hasDuplicates={false}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchedJokes: state.searchedJokes,
  query: state.query,
  isQueryValid: state.isQueryValid,
  loaded: state.loaded
});

export default connect(mapStateToProps)(SearchBlock);

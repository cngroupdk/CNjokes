import React from "react";
import { Input } from "reactstrap";
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
    const listItems = this.state.searchedJokes.map(joke => joke.value);

    return (
      <>
        <p>
          You can use this fulltext search to look for the jokes you're so eager
          to find.
        </p>
        <Input
          type="search"
          value={this.state.query}
          onChange={this.handleSearch}
        />
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
      </>
    );
  }
}

export default SearchBlock;

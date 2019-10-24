import React from "react";
import { Input } from "reactstrap";
import JokesList from "./JokesList";

const API_URL = "https://api.chucknorris.io/jokes/search?query=";
let finalUri = "";

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
    fetch(finalUri)
      .then(response => response.json())
      .then(dataFromApi => {
        this.setState({ loaded: true, searchedJokes: dataFromApi.result });
      });
  };

  handleQuery = () => {
    if (this.state.query.length < 3 || this.state.query.length > 120) {
      this.setState({ isQueryValid: false });
    } else {
      this.setState({ isQueryValid: true });
      this.updateQueryUrl(API_URL, this.state.query);
      this.fetchData();
    }
  };

  updateQueryUrl = (API_URL, query) => {
    finalUri = API_URL + query;
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

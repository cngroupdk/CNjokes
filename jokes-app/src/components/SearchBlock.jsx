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
      isQueryValid: true
    };
  }

  fetchData = () => {
    fetch(finalUri)
      .then(response => response.json())
      .then(dataFromApi => {
        console.log(dataFromApi.result);
        this.setState({ searchedJokes: dataFromApi.result });
      });
  };

  handleQuery = event => {
    this.setState({ query: event.target.value });
    console.log(this.state.query);
    console.log(event.target.value);
  };

  updateQueryUrl = (API_URL, query) => {
    finalUri = API_URL + query;
    console.log(finalUri);
  };

  handleSearch = () => {
    if (this.state.query.length < 3 || this.state.query.length > 120) {
      this.setState({ isQueryValid: true, searchedJokes: [] });
    } else {
      this.setState({ isQueryValid: false });
      this.fetchData();
    }
  };

  handleChange = event => {
    this.handleQuery(event);
    this.updateQueryUrl(API_URL, this.state.query);
    this.handleSearch();
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
          onChange={this.handleChange}
          onKeyUp={this.handleChange}
        />
        {this.state.isQueryValid ? (
          <p>
            The word you seek for must have at least 3 characters and maximum
            120.
          </p>
        ) : (
          <JokesList loaded={true} jokes={listItems} hasDuplicates={true} />
        )}
      </>
    );
  }
}

export default SearchBlock;

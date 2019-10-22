import React from "react";
import { Button, Input } from "reactstrap";
import JokesList from "./JokesList";

const API_URL = "https://api.chucknorris.io/jokes/search?query=";
let finalUri = "";

class SearchBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      searchedJokes: [],
      isQueryEmpty: true
    };
  }

  updateQueryUrl = (API_URL, query) => {
    finalUri = API_URL + query;
    console.log(finalUri);
  };

  fetchData = () => {
    fetch(finalUri)
      .then(response => response.json())
      .then(dataFromApi => {
        console.log(dataFromApi.result);
        this.setState({ searchedJokes: dataFromApi.result });
      });
  };

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSearch = () => {
    this.updateQueryUrl(API_URL, this.state.query);
    if (this.state.query === "") {
      this.setState({ isQueryEmpty: true, searchedJokes: [] });
    } else {
      this.setState({ isQueryEmpty: false });
      this.fetchData();
    }
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
        />
        <Button onClick={this.handleSearch}>Search!</Button>
        {this.state.isQueryEmpty ? (
          <p>Search for something!</p>
        ) : (
          <JokesList loaded={true} jokes={listItems} hasDuplicates={true} />
        )}
      </>
    );
  }
}

export default SearchBlock;

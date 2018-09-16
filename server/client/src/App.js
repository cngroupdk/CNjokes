import React, { Component } from "react";

import SearchBar from "./components/searchBar";
import JokeList from "./components/jokeList";

class App extends Component {
  render() {
    const { jokes } = this.props;

    if (jokes) console.log(jokes);

    return (
      <div className="container">
        <SearchBar />
        <h1>Jokes</h1>
        <JokeList />
      </div>
    );
  }
}

export default App;

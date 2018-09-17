import React, { Component } from "react";

import Header from "./components/header";
import Categories from "./components/categories";
import JokeList from "./components/jokeList";

class App extends Component {
  render() {
    const { jokes } = this.props;

    if (jokes) console.log(jokes);

    return (
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="categories-container">
            <Categories />
          </div>
          <div className="jokes-container">
            <JokeList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

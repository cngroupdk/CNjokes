import React, { Component } from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import Jokes from "./components/jokes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header-container">
          <Header />
        </div>
        <div className="content">
          <div className="categories-container">
            <Categories />
          </div>
          <div className="jokes-container">
            <Jokes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

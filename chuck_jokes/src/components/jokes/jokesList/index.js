import React, { Component } from "react";
import List from "./List";
import "./jokesList.css";

class JokeList extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="column">
        <div className="column">
          {/* This div is added to align header with joke list */}
          <h2>RandomJoke / Category name</h2>
        </div>
        <List data={data}/>
      </div>
    );
  }
}

export default JokeList;

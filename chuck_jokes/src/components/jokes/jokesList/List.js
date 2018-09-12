import React, { Component } from "react";
import JokeListItem from "./JokeListItem";

class List extends Component {
  renderJokes() {
    const { data } = this.props;

    if (!data) return;

    return data.map((item, index) => {
      return <JokeListItem key={index} joke={item} />;
    });
  }

  render() {
    return <div className="column">{this.renderJokes()}</div>;
  }
}

export default List;

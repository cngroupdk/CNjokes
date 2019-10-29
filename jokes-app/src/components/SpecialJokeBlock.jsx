import React from "react";
import { api } from "../modules/api";

class SpecialJokeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedJoke: "Loading some CN joke..."
    };
  }

  componentDidMount = () => {
    api.fetchRandomJoke(this.setJokeToState);
  };

  setJokeToState = data => {
    this.setState({ selectedJoke: data.value });
  };

  handleClick = () => {
    api.fetchRandomJoke(this.setJokeToState);
  };

  render() {
    return (
      <div className="special-joke-block">
        <p className="special-joke">{this.state.selectedJoke}</p>
        <button className="btn-another-joke" onClick={this.handleClick}>
          ↻
        </button>
      </div>
    );
  }
}

export default SpecialJokeBlock;

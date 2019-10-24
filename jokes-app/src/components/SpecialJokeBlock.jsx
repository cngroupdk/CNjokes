import React from "react";
import { api } from "../modules/api";
import { Button } from "reactstrap";

class SpecialJokeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedJoke: "Waiting for some CN joke."
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
      <>
        <p>{this.state.selectedJoke}</p>
        <Button onClick={this.handleClick}>Show me another one!</Button>
      </>
    );
  }
}

export default SpecialJokeBlock;

import React from "react";
import { Button } from "reactstrap";

const API_URL = "https://api.chucknorris.io/jokes/random";

class SpecialJokeBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedJoke: "Waiting for some CN joke."
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(dataFromApi => {
        this.setState({ selectedJoke: dataFromApi.value });
      });
  };

  handleClick = () => {
    this.fetchData();
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

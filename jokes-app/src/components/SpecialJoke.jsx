import React from 'react';

const API_URL = 'https://api.chucknorris.io/jokes/random';

class SpecialJoke extends React.Component {   
  constructor(props) {
    super(props)

    this.state = {
      selectedJoke: 1
    }
  }

  componentDidMount = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(dataFromApi => {
        this.setState({ selectedJoke: dataFromApi.value });
      });
  };

  handleClick = () => {
    this.componentDidMount();
    console.log(this.selectedJoke);
  }

    render() {
      return (
        <>
          <p>{this.state.selectedJoke}</p>
          <button onClick={this.handleClick}>
            Show me another one!
          </button>
        </>
      );
    }
  }

  export default SpecialJoke;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Greeting from './Greeting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  onChangeName = newName => this.setState({ name: newName })

  render() {
    return (
      <div className="App">
        <Greeting name={this.state.name} />
        <button onClick={() => this.onChangeName('John')}>John</button>
        <button onClick={() => this.onChangeName('Ivan')}>Ivan</button>
        <button onClick={() => this.onChangeName('Alice')}>Alice</button>
        <button onClick={() => this.onChangeName('David')}>David</button>
      </div>
    );
  }
}

export default App;

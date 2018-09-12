import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Jokes from './components/jokes';
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Jokes />
      </div>
    );
  }
}

export default App;

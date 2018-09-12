import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container box">
        <div className="row box">
          <div className="column box">blok1.1</div>
          <div className="column box">blok1.2</div>
          <div className="column box">blok1.3</div>
        </div>
        <div className="row box">
          <div className="columnCategory box">blok2.1</div>
          <div className="columnJoke box">blok2.2</div>
        </div>
      </div>
    );
  }
}

export default App;

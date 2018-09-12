import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="columnCategory">blok2.1</div>
          <div className="columnJoke">blok2.2</div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import "./Layout.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

const basePoint = 'https://api.chucknorris.io/jokes';

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomJokeList: [],
      numberOfJokes: 1
    }
    
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.fetchRandomJokes = this.fetchRandomJokes.bind(this);
    }
  
    incrementHandler() {
      let incrementCounter = this.state.numberOfJokes;
      incrementCounter++;
      this.setState({numberOfJokes: incrementCounter})
      this.fetchRandomJokes();
      console.log(this.state.randomJokeList)
    };
  
    decrementHandler() {
      let decrementCounter = this.state.numberOfJokes;
      decrementCounter--,
      this.setState({numberOfJokes: decrementCounter})
      this.fetchRandomJokes();
      console.log(this.state.randomJokeList)
    };

    fetchRandomJokes() {
        fetch( basePoint + '/random')
          .then( response => response.json() )
          .then( data => this.setState({randomJokeList: [data, ...this.state.randomJokeList]}) )

    }

  render() {
    const {numberOfJokes} = this.state;
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar 
          counterValue={numberOfJokes}
          incrementCounter={this.incrementHandler}
          decrementCounter={this.decrementHandler}/>
          <Jokes />
        </div>
      </div>
    );
  }
}

export default Layout;

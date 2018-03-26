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
    this.fetchRandomJoke = this.fetchRandomJoke.bind(this);
    }

    componentDidMount() {
      this.fetchRandomJoke();
    }
  
    incrementHandler() {
      let incrementCounter = this.state.numberOfJokes;
      incrementCounter++;
      this.setState({numberOfJokes: incrementCounter})
      this.fetchRandomJoke();
    };
  
    decrementHandler() {
      let decrementCounter = this.state.numberOfJokes;
      decrementCounter--,
      this.setState({numberOfJokes: decrementCounter})
      this.deleteLastJoke();
    };

    deleteLastJoke() {
      let reducedJokeList = this.state.randomJokeList;
      reducedJokeList.splice(0, 1);
      this.setState({randomJokeList: reducedJokeList})
    }

    fetchRandomJoke() {
      this.setState({
        randomJokeList: this.state.randomJokeList
      })

      fetch( basePoint + '/random')
        .then( response => response.json() )
        .then( data => this.setState(
          {randomJokeList: [data, ...this.state.randomJokeList]}) )
    }

  render() {
    const {numberOfJokes, randomJokeList} = this.state;
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar 
          counterValue={numberOfJokes}
          incrementCounter={this.incrementHandler}
          decrementCounter={this.decrementHandler}/>
          <Jokes 
          jokeList={randomJokeList}/>
        </div>
      </div>
    );
  }
}

export default Layout;

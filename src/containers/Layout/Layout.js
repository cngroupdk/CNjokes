import React, { Component } from "react";

import "./layout.css";

import apiBaseURL from '../../components/apiBaseURL'
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokesList: [],
      numberOfJokes: 1
    }
    
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.fetchRandomJoke = this.fetchRandomJoke.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      let reducedJokeList = this.state.jokesList;
      reducedJokeList.splice(0, 1);
      this.setState({jokesList: reducedJokeList})
    }

    fetchRandomJoke() {
      this.setState({
        jokesList: this.state.jokesList
      })

      fetch( apiBaseURL + '/random')
        .then( response => response.json() )
        .then( data => this.setState(
          {jokesList: [data, ...this.state.jokesList]}) )
    }

    handleClick(event) {
      const { name } = event.target;
  
      fetch( apiBaseURL + '/random?category=' + name )
        .then( response => response.json() )
        .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
    }

  render() {
    const {numberOfJokes, jokesList} = this.state;
    return (
      <div>
        <Header />
        <div className="content">
        <Sidebar
          handleClick={this.handleClick} 
          counterValue={numberOfJokes}
          incrementCounter={this.incrementHandler}
          decrementCounter={this.decrementHandler}/>
        <Jokes 
          jokeList={jokesList}/>

        </div>
      </div>
    );
  }
}

export default Layout;

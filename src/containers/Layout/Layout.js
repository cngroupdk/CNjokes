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
      numberOfJokes: 1,
      searchInput: "",
      matchedJokesList: [],
    }
    
    this.incrementHandler = this.incrementHandler.bind(this);
    this.decrementHandler = this.decrementHandler.bind(this);
    this.fetchRandomJoke = this.fetchRandomJoke.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
      this.fetchRandomJoke();
    }
  
    incrementHandler() {
      this.setState(prevState => ({numberOfJokes: ++prevState.numberOfJokes}))
      this.fetchRandomJoke();
    };
  
    decrementHandler() {
      this.setState(prevState => ({numberOfJokes: --prevState.numberOfJokes}))
      this.deleteLastJoke();
    };

    fetchRandomJoke() {
      const { jokesList } = this.state;
      this.setState({ jokesList });

      fetch(`${apiBaseURL}/random`)
        .then(response => response.json())
        .then(data => this.setState({
          jokesList: [data, ...jokesList]
        }));
    }

    handleClick(event) {
      const { name } = event.target;
  
      fetch(`${apiBaseURL}/random?category=${name}`)
        .then(response => response.json())
        .then(data => this.setState({jokesList: [data]}));
    }

    handleSearch(event) {
      const { value } = event.target;
      const { matchedJokesList } = this.state;

      this.setState({
        searchInput: value,
      });

      if(value.length > 2) {
        fetch(`${apiBaseURL}/search?query=${value}`)
          .then(response => response.json())
          .then(data => this.setState({matchedJokesList: data.result.slice(0, 25)}));
      }
    }

    handleKeyPress(event) {
      const { matchedJokesList } = this.state;

      if(event.key === 'Enter'){
        this.setState({jokesList: matchedJokesList});
      }
    } 

  render() {
    const { numberOfJokes, jokesList, searchInput } = this.state;
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
            jokeList={jokesList}
            handleSearch={this.handleSearch}
            searchInput={searchInput}
            handleKeyPress={this.handleKeyPress}/>
        </div>
      </div>
    );
  }
}

export default Layout;

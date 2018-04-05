import React, { Component } from "react";

import "./layout.css";

import apiBaseURL from '../../components/apiBaseURL'
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

function updateState (data) {
  return state => ({
    jokesList: [data, ...state.jokesList],
  });
}

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jokesList: [],
      numberOfJokes: 1,
      searchInput: "",
      matchedJokesList: [],
    }
  }

  componentDidMount() {
    this.fetchRandomJoke();
  }
  
  incrementHandler = () => {
    this.setState(prevState => ({numberOfJokes: ++prevState.numberOfJokes}))
  };

  decrementHandler = () => {
    this.setState(prevState => ({numberOfJokes: --prevState.numberOfJokes}))
  }

  fetchRandomJoke = () => {
    const { numberOfJokes, jokesList } = this.state;
    
    for(let i=0; i<numberOfJokes; i++) {
      fetch(`${apiBaseURL}/random`)
        .then(response => response.json())
        .then(data => {
          if(jokesList.find(joke => {return joke.id === data.id;}) === undefined) {
            this.setState(updateState(data));
          }
          else {
            this.fetchRandomJoke();
          }
      });
    }
  }

  fetchCategory = (name) => {
    const { jokesList } = this.state;

    fetch(`${apiBaseURL}/random?category=${name}`)
        .then(response => response.json())
        .then(data => {
          if(jokesList.find(joke => {return joke.id === data.id;}) === undefined) {
            this.setState(updateState(data));
          }
          else {
            this.fetchCategory(name);
          }
      });
  }

  handleClick = (event) => {
    const { name } = event.target;
    const { numberOfJokes } = this.state;
    
    for(let i=0; i<numberOfJokes; i++) {
      this.fetchCategory(name);
    }
  }

  handleSearch = (event) => {
    const { value } = event.target;

    this.setState({
      searchInput: value,
    });

    if(value.length > 2) {
      fetch(`${apiBaseURL}/search?query=${value}`)
        .then(response => response.json())
        .then(data => this.setState({matchedJokesList: data.result.slice(0, 25)}));
    }
  }

  handleKeyPress = (event) => {
    const { matchedJokesList, searchInput } = this.state;

    if(searchInput.length < 3 && event.key === 'Enter') {
      return this.setState({ jokesList: [{id: "abc123xy", value: "SHORT INPUT. INPUT SHOULD BE AT LEAST 3 CHARACTERS."}] });
    }

    if(matchedJokesList.length === 0 && event.key === 'Enter') {
      return this.setState({ jokesList: [{id: "abc123xy", value: "NO MATCHES."}] });
    }

    if(event.key === 'Enter'){
      this.setState({
        jokesList: matchedJokesList,
        matchedJokesList: [],
      });
    }
  }

  handleClearSCR = () => {
    this.setState({jokesList: []});
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
            decrementCounter={this.decrementHandler}
            fetchRandomJoke={this.fetchRandomJoke}/>
          <Jokes 
            jokeList={jokesList}
            handleSearch={this.handleSearch}
            searchInput={searchInput}
            handleKeyPress={this.handleKeyPress}
            handleClearSCR={this.handleClearSCR}/>
        </div>
      </div>
    );
  }
}

export default Layout;

import React, { Component } from "react";

import "./layout.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

class Layout extends Component {
  constructor(props){
    super(props);

    this.state = {
      jokesList: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target;
    const name = target.name;

    fetch( 'https://api.chucknorris.io/jokes/random?category=' + name )
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
  }

  render() {
    console.log(this.state.jokesList);
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar handleClick={this.handleClick}/>
          <Jokes />
        </div>
      </div>
    );
  }
}

export default Layout;

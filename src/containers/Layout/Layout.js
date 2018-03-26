import React, { Component } from "react";

import "./layout.css";

import apiBaseURL from '../../components/apiBaseURL'
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
    const { name } = event.target;

    fetch( apiBaseURL + '/random?category=' + name )
      .then( response => response.json() )
      .then( data => this.setState({jokesList: [data, ...this.state.jokesList]}) );
  }

  render() {
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

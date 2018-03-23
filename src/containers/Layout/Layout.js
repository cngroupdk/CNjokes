import React, { Component } from "react";

import "./Layout.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numberOfJokes: 1,
      randomJokeList: [],
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <Sidebar />
          <Jokes />
        </div>
      </div>
    );
  }
}

export default Layout;

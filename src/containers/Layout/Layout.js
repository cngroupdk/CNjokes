import React, { Component } from "react";

import "./Layout.css";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Category from "../../components/Category/Category";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";
import Joke from "../../components/Joke/Joke";

class Layout extends Component {
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

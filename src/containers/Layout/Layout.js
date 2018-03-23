import React, { Component } from "react";

import "./layout.css";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Jokes from "../Jokes/Jokes";

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

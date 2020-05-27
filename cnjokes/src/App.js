import React, { Component } from "react";
import "./App.css";

import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "yBo2DPQ-RdiUXJwfzl8b4A",
      url: "",
      value:
        "Chuck Norris is suing the creators of Facebook, for stealing the name of his personal collection of facial tissue he ripped off from people he met with bad manners.",
    };
  }

  render() {
    return (
      <div className="App">
        <Card id={this.state.id} joke={this.state.value} />
      </div>
    );
  }
}

export default App;

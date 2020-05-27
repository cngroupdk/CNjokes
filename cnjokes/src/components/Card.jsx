import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  render() {
    return (
      <div className="card" id={this.props.id}>
        <p className="text">{this.props.joke}</p>
      </div>
    );
  }
}

export default Card;

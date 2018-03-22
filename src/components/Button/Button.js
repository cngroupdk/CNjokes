import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  state = {
    counterValue: 1
  };

  incrementHandler = () => {
    let counterIncrement = this.state.counterValue;
    counterIncrement++;
    console.log("Spustil som incrementHandler!");
    this.setState({ counterValue: counterIncrement });
  };

  decrementHandler = () => {
    let counterDecrement = this.state.counterValue;
    counterDecrement--;
    console.log("Spustil som decrementHandler!");
    this.setState({ counterValue: counterDecrement });
  };

  render() {
    return (
      <div className="button-area">
        <button className="get-jokes-button">
          Give Me Another: {this.state.counterValue}
        </button>
        <div className="adjustment-buttons">
          <button className="adjustment-button" onClick={this.incrementHandler}>
            +
          </button>
          <button className="adjustment-button" onClick={this.decrementHandler}>-</button>
        </div>

      </div>
    );
  }
}

export default Button;

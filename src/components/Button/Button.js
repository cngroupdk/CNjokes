import React, { Component } from "react";
import PropTypes from 'prop-types';

import './button.css';



class Button extends Component {
  render() {
    const { counterValue, incrementCounter, decrementCounter, fetchRandomJoke } = this.props;

    return (
      <div className="button-area">
        <button 
          className="get-jokes-button"
          onClick={fetchRandomJoke}>
          Give Me Another: {counterValue}
        </button>
        <div className="adjustment-buttons">
          <button 
            className="adjustment-button" 
            onClick={incrementCounter}
            disabled={counterValue === 25}>
            +
          </button>
          <button 
            className="adjustment-button" 
            onClick={decrementCounter}
            disabled={counterValue === 1}>
            -
          </button>
        </div>
      </div>
    );
  }
}

Button.propTypes = {
  counterValue: PropTypes.number,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  fetchRandomJoke: PropTypes.func.isRequired,
};

export default Button;

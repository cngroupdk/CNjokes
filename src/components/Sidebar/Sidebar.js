import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

class Sidebar extends Component {
  render() {
    const { counterValue, incrementCounter, decrementCounter, handleClick, fetchRandomJoke } = this.props;
    return (
      <div className="sidebar">
        <Button 
          counterValue={counterValue}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
          fetchRandomJoke={fetchRandomJoke}
        />
        <Categories handleClick={handleClick}/>
      </div>
    );
  };
}

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  counterValue: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
  fetchRandomJoke: PropTypes.func.isRequired,
};

export default Sidebar;

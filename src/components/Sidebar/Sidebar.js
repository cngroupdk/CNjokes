import React, {Component} from "react";
import PropTypes from 'prop-types';


import "./Sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

class Sidebar extends Component {
  render() {
    const {counterValue,incrementCounter, decrementCounter} = this.props;
    return (
      <div className="sidebar">
        <Categories />
        <Button 
          counterValue={counterValue}
          incrementCounter={incrementCounter}
          decrementCounter={decrementCounter}
        />
      </div>
    );
  };
}

Sidebar.propTypes = {
  counterValue: PropTypes.number,
  incrementCounter: PropTypes.any,
  decrementCounter: PropTypes.any,
};

export default Sidebar;

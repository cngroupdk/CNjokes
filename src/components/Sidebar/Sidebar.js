import React, {Component} from "react";

import "./Sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    counterValue: 1
  };

  this.incrementHandler = this.incrementHandler.bind(this);
  this.decrementHandler = this.decrementHandler.bind(this);
  }

  incrementHandler(event) {
    let incrementCounter = this.state.counterValue;
    incrementCounter++;
    this.setState({counterValue: incrementCounter})
  };

  decrementHandler(event) {
    let decrementCounter = this.state.counterValue;
    decrementCounter--,
    this.setState({counterValue: decrementCounter})
  };

  render() {
    const {counterValue} = this.state;
    return (
      <div className="sidebar">
        <Categories />
        <Button 
          counterValue={counterValue}
          incrementCounter={this.incrementHandler}
          decrementCounter={this.decrementHandler}
        />
      </div>
    );
  };
}

export default Sidebar;

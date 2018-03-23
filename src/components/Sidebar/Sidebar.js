import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./Sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

class Sidebar extends Component {
  render(){
    return (
      <div className="sidebar">
        <Categories handleClick={this.props.handleClick}/>
        <Button />
      </div>
    );
  }
};

Sidebar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Sidebar;

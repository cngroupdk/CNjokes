import React, { Component } from "react";
import PropTypes from 'prop-types';

import "./../Button/Button.css";
import "./Category.css";

class Category extends Component {
  render(){
    const { name, handleClick } = this.props;
    return(
      <div>
        <label className="container">
          <button type="button"
            name={name}
            className="category-button" 
            onClick={handleClick}>
            {name}
          </button>
        </label>
      </div>
    );
  }
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Category;

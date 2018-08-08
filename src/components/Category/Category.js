import React, { Component } from "react";
import PropTypes from "prop-types";

import "./category.css";

class Category extends Component {
  render() {
    const { name, handleClick } = this.props;
    return (
      <div className="container">
        <button
          type="button"
          name={name}
          className="category-button"
          onClick={handleClick}
        >
          {name}
        </button>
      </div>
    );
  }
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Category;

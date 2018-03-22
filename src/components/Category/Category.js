import React from "react";
import "./category.css";

const Category = props => (
  <div>
    <label className="container">
      {props.name}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  </div>
);

export default Category;

import React from "react";
import "./Category.css";

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

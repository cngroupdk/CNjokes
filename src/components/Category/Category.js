import React from "react";
import "./category.css";

const Category = ({ name }) => (
  <div>
    <label className="container">
      {name}
      <input type="checkbox" />
      <span className="checkmark" />
    </label>
  </div>
);

export default Category;

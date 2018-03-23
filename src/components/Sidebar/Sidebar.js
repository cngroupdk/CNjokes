import React from "react";

import "./sidebar.css";

import Categories from "../../containers/Categories/Categories";
import Button from "../Button/Button";

const Sidebar = props => {
  return (
    <div className="sidebar">
      <Categories />
      <Button />
    </div>
  );
};

export default Sidebar;

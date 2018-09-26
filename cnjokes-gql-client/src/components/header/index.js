import React from "react";
import "./header.css";
import HeaderLogo from "./HeaderLogo";
import SearchBarInput from "./SearchBarInput";
import DisplayNumberInput from "./DisplayNumberInput";

const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <SearchBarInput />
      <DisplayNumberInput />
    </div>
  );
};

export default Header;

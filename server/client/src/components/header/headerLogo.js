import React from "react";

const HeaderLogo = () => (
  <img
    className="logo"
    src="chuck-norris.png"
    alt="Chuck Norris logo"
    onClick={e => window.location.reload()}
  />
);

export default HeaderLogo;

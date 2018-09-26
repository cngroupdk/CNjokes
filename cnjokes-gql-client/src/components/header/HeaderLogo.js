import React from "react";

const HeaderLogo = () => (
  <div className="logo-container">
    <img
      className="logo"
      src="chuck-norris.png"
      alt="Chuck Norris logo"
      onClick={e => window.location.reload()}
    />
  </div>
);

export default HeaderLogo;

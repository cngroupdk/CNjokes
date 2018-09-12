import React, { Component } from 'react';

class HeaderLogo extends Component {
  render() {
    return (
      <div className="column">
        <img
          className="headerLogo"
          src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
          alt="Chuck Norris logo"
        />
      </div>
    );
  }
}

export default HeaderLogo;

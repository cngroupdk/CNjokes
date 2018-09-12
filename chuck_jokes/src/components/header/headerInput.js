import React, { Component } from 'react';

class HeaderInput extends Component {
  render() {
    return (
      <div className="column justify-center">
        <input
          className="headerInput"
          placeholder="Search for a joke"
          type="text"
        />
      </div>
    );
  }
}

export default HeaderInput;

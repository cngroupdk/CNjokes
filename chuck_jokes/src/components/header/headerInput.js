import React, { Component } from 'react';
import './headerInput.css';

class HeaderInput extends Component {
  render() {
    return (
      <div className="column justify-center">
        <input className="headerInput" type="text" />
      </div>
    );
  }
}

export default HeaderInput;

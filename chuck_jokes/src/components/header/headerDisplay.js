import React, { Component } from 'react';

class HeaderDisplay extends Component {
  render() {
    return (
      <div className="column justify-center">
        <div className="row">
          <span className="column justify-center text-right">Display</span>
          <input className="justify-center headerDisplay" type="number" />
        </div>
      </div>
    );
  }
}

export default HeaderDisplay;

import React, { Component } from 'react';

class HeaderDisplay extends Component {
  render() {
    return (
      <div className="column justify-center">
        <div className="row">
          <span className="column justify-center text-right">Display</span>
          <input className="column justify-center" type="number" />
        </div>
      </div>
    );
  }
}

export default HeaderDisplay;

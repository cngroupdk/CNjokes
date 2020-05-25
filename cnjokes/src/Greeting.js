import React, { Component } from 'react';

class Greeting extends Component {
  render() {

    return (
      <div>
        Hello {this.props.name}!
      </div>
    );
  }
}

export default Greeting;

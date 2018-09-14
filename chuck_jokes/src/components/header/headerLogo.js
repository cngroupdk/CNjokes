import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory, fetchAllJokes } from '../../actions';

class HeaderLogo extends Component {
  fetchAllJokesHeader = () => {
    this.props.selectCategory(null);
    this.props.fetchAllJokes();
  };
  render() {
    return (
      <div className="column">
        <img
          className="logo"
          src="chuck-norris.png"
          alt="Chuck Norris logo"
          onClick={this.fetchAllJokesHeader.bind(this)}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { selectCategory, fetchAllJokes },
)(HeaderLogo);

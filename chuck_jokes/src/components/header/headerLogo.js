import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../../actions';

class HeaderLogo extends Component {
  render() {
    return (
      <div className="column">
        <img
          className="headerLogo"
          src="chuck-norris.png"
          alt="Chuck Norris logo"
          onClick={() => {
            this.props.selectCategory(null);
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { allJokesCount: state.j };
};

export default connect(
  mapStateToProps,
  { selectCategory },
)(HeaderLogo);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNumber } from '../../actions';
class HeaderDisplay extends Component {
  render() {
    const { number, setNumber } = this.props;
    return (
      <div className="column justify-center flex-25">
        <div className="row">
          <span className="column justify-center text-display">Display</span>
          <input
            className="headerDisplay"
            type="number"
            value={number}
            onChange={e => {
              setNumber(e.target.value);
            }}
            min="1"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { number: state.jokesFilter.number };
};

export default connect(
  mapStateToProps,
  { setNumber },
)(HeaderDisplay);

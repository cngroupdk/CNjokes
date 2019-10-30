import React from "react";
import { api } from "../modules/api";
import { connect } from "react-redux";
import { setJoke } from "../actions";

class SpecialJokeBlock extends React.Component {
  componentDidMount = () => {
    api.fetchRandomJoke(this.setJokeToState);
  };

  setJokeToState = data => {
    this.props.dispatch(setJoke(data));
  };

  handleClick = () => {
    api.fetchRandomJoke(this.setJokeToState);
  };

  render() {
    return (
      <div className="special-joke-block">
        <p className="special-joke">{this.props.selectedJoke}</p>
        <button className="btn-another-joke" onClick={this.handleClick}>
          ↻
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedJoke: state.selectedJoke
});

export default connect(mapStateToProps)(SpecialJokeBlock);

import React, { Component } from "react";
import { connect } from "react-redux";
import { searchJokes } from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search jokes"
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.searchJokes(term);
  }
}

export default connect(
  null,
  { searchJokes }
)(SearchBar);

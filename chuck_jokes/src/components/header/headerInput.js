import React, { Component } from "react";

class HeaderInput extends Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
  }

  onInputChange(query) {
    this.setState({ query });
    this.props.onQueryChange(query);
  }

  render() {
    return (
      <div className="column justify-center">
        <input
          className="headerInput"
          placeholder="Search for a joke"
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
          type="text"
        />
      </div>
    );
  }
}

export default HeaderInput;

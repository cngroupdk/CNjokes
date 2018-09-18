import React, { Component } from "react";
import "./header.css";
import { connect } from "react-redux";
import { searchJokes, setNumber, fetchJokes } from "../../actions";
import HeaderLogo from "./headerLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "", displayNumber: "" };
  }

  render() {
    const { query, displayNumber } = this.state;
    return (
      <div className="header">
        <div className="logo-container">
          <HeaderLogo />
        </div>
        <div className="search-bar">
          <input
            value={query}
            onChange={event => this.onQueryChange(event.target.value)}
            placeholder="Search jokes"
          />
        </div>

        <div className="display-number-bar">
          <input
            value={displayNumber}
            type="number"
            onChange={event => this.onDisplayNumberChange(event.target.value)}
            placeholder="Count of jokes"
          />
        </div>
      </div>
    );
  }

  onQueryChange(query) {
    this.setState({ ...this.state, query });
    this.props.searchJokes(query);
  }

  onDisplayNumberChange(displayNumber) {
    //searchNumber is set in case the input is empty
    let searchNumber = displayNumber;
    if (displayNumber === "") {
      searchNumber = 100;
    } else if (displayNumber !== "" && displayNumber <= 0) {
      displayNumber = 1;
      searchNumber = displayNumber;
    }
    console.log(displayNumber);
    this.setState({ ...this.state, displayNumber });
    this.props.setNumber(searchNumber);
    this.props.fetchJokes(searchNumber);
  }
}

export default connect(
  null,
  { searchJokes, setNumber, fetchJokes }
)(Header);

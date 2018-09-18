import React, { Component } from "react";
import "./header.css";
import { connect } from "react-redux";
import { searchJokes } from "../../actions";
import HeaderLogo from "./headerLogo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <HeaderLogo />
        </div>
        <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            placeholder="Search jokes"
          />
        </div>
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
)(Header);

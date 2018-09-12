import React, { Component } from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { searchJoke } from "../../actions";
import "./header.css";
import HeaderLogo from "./headerLogo";
import HeaderInput from "./headerInput";
import HeaderDisplay from "./headerDisplay";

class Header extends Component {
  searchJokes(query) {
    console.log(query);
    this.props.searchJoke(query);
  }

  render() {
    const searchJokes = debounce(query => {
      this.searchJokes(query);
    }, 300);

    return (
      <div className="row header">
        <HeaderLogo />
        <HeaderInput onQueryChange={searchJokes} />
        <HeaderDisplay />
      </div>
    );
  }
}

export default connect(
  null,
  { searchJoke }
)(Header);

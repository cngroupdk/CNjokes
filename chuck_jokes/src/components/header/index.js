import React, { Component } from 'react';
import './header.css';
import HeaderLogo from './headerLogo';
import HeaderInput from './headerInput';
import HeaderDisplay from './headerDisplay';

class Header extends Component {
  render() {
    return (
      <div className="row header">
        <HeaderLogo />
        <HeaderInput />
        <HeaderDisplay />
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.children}
      </div>
    );
  }
}

export default Header;

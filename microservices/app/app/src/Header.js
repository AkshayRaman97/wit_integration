import React, { Component } from 'react';

const styles = {
  HeaderStyle : {
    fontSize : 44,
    color : 'green',
  }
}

class Header extends Component {
  render() {
    return (
      <div className="Header" style={styles.HeaderStyle}>
        {this.props.heading}
      </div>
    );
  }
}

export default Header;

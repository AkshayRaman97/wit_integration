import React from 'react';
import './index.css';

class Intro extends React.Component {
  render(){
    return(
      <div className="Intro">
        {this.props.children}
      </div>
    );
  }
}

export default Intro;

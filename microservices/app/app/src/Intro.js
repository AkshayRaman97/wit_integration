import React from 'react';
import './index.css';

class Intro extends React.Component {
  render(){
    return(
      <div class="Intro">
        {this.props.children}
      </div>
    );
  }
}

export default Intro;

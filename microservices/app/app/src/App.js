import React, { Component } from 'react';
import Header from './Header';
import Intro from './Intro';
import Wit from './Wit';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header>
          Wit.ai
        </Header>
        <Intro>
          This is a sample wit integration , it simply gets user input and displays the intent of the text
        </Intro>
        <Wit />
      </div>
    );
  }
}

export default App;

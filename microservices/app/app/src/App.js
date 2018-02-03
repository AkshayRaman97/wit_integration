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
          <p>This is a sample wit integration for a news chat bot, it simply gets user input and displays the intent of the text along with a search term.</p>
          <p>Example : <b class="bold">Will it rain today at 4pm in Chennai?</b></p>
        </Intro>
        <Wit />
      </div>
    );
  }
}

export default App;

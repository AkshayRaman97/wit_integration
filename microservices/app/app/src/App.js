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
          <p>Example : <b className="bold">Will it rain today at 4 pm in Chennai?</b></p>
        </Intro>
        <Wit />
        <div id="github-container">
          <div className="tooltip">
            <a className="center" href="https://github.com/AkshayRaman97/wit_integration">
            <img alt="github repo" id="github-thumbnail" src="https://image.flaticon.com/icons/png/512/25/25231.png" />
            </a>
            <span className="tooltiptext">Github repository</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

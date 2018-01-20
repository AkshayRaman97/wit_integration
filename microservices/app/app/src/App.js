import React, { Component } from 'react';
import Header from './Header';
import './App.css';

const styles = {
  AppStyle : {

  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header heading="Wit.ai" />
      </div>
    );
  }
}

export default App;

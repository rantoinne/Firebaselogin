import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authenticate from './Authenticate';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Firebase_Login App In React</h1>
        </header>
        <Authenticate />
      </div>
    );
  }
}

export default App;

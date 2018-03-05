import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Aside from './components/Aside';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Aside/>
      </div>
    );
  }
}

export default App;

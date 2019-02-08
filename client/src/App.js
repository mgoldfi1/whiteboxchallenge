import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import MainSection from './components/mainSection.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <MainSection/>
      </div>
    );
  }
}

export default App;

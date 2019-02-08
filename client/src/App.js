import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import MainSection from './components/mainSection.js'
import ProductPage from './components/productPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       <MainSection/>
      </div>
    );
  }
}

export default App;

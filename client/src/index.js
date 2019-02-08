import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import ProductPage from './components/productPage';
import Navbar from './components/navbar';

ReactDOM.render(
    <Router>
    <React.Fragment>
    <Navbar/>
    <Route exact path="/" component={App}/>   
    <Route path="/product/:id" component={ProductPage} />
    </React.Fragment>
  </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

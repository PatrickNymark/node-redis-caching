import React,  { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css'
import { Navbar } from './components/fragments/Navbar';
import Routes from './components/routing/Routes';
import { history } from './helpers';

class App extends Component {  
  render() {
    return (
        <Router history={history}>
          <div className="app">
            <Navbar />
            <Routes Route={Route} />
          </div>
        </Router>
    );
  }
}

const connectedApp = connect(null)(App);
export { connectedApp as App }

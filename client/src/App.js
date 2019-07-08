import React from 'react';
import { Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import { history } from './helpers';

function App() {
  return (
    <Router history={history}>
        <Navbar />
        <Routes Route={Route} />
    </Router>
  );
}

export default App;

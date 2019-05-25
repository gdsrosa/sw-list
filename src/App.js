import React from 'react';
import { Router } from '@reach/router';

import Characters from './components/Characters';
import Starships from './components/Starships';
import Nav from './components/Nav';
import Home from './components/Home';

import './styles/index.scss';

const App = () => (
  <div>
    <Nav />
    <div className="container-fluid row app">
      <Router>
        <Home path="/" />
        <Characters path="characters" />
        <Starships path="starships" />
      </Router>
    </div>
  </div>
);

export default App;

import React from 'react';
import {  HashRouter  } from 'react-router-dom'
import routes from './Routes'
import Header from './components/Header'


import './App.css';

function App() {
  return (
    <HashRouter>
      <Header/>
      {routes}
    </HashRouter>
  );
}

export default App;

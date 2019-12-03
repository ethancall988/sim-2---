import React from 'react';

import DashBoard from './components/DashBoard'
import Wizard from './components/Wizard'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="App">
      <DashBoard/>
      <Wizard/>
      <Header/>
    </div>
  );
}

export default App;

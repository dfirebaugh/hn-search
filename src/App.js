import React, { Component } from 'react';
import PreviousList from './components/PreviousList';
import Search from './components/Search';
import './App.css';

const App = () => (
  <div className="App">
    {false && <PreviousList />}
    <Search />
  </div>
)

export default App;

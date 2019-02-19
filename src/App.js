import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import PreviousList from './components/PreviousList';
import Search from './components/Search';
import './App.css';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <PreviousList />
      <Search />
    </Provider>
  </div>
)

export default App;

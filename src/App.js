import React from 'react';

import Main from './components/Main';
import Navbar from './components/Navbar';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
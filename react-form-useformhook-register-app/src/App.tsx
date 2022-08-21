import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Employee} from '../src/component/pages';
import '../src/applyStyle.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Employee/>
      </header>
    </div>
  );
}

export default App;

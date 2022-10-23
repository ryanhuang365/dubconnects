<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import React from 'react';
import LandingPage from './pages/LandingPage';
import MainPage from './pages/MainPage';
import TestingApp from './Testing/TestingApp';

function App() {
  return (
    <TestingApp />
  )
>>>>>>> Stashed changes
}

export default App;

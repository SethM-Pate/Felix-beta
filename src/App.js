import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './login';
import logo from './logo.svg';  // <-- Import the logo image file
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* It appears the 'logo' variable is not defined in your code snippet, ensure it is imported or defined */}
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
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}


export default App;

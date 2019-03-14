import React from "react";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hasal The Greatest
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Youtube
          </a>
        </header>
      </div>
    );
  }
}

export default App;

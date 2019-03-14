import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import './App.css';


const API_KEY = "***your key here***";

class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch('***your data link here***');
    const data = await api_call.json();
  }
  
    render() {
    return (
      <div className="App">
        <header className="App-header">
            <Titles/>
            <Form/>
            <Weather/>
        </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"
import './App.css';


const API_KEY = "430ebea779a86b936979675e08793d51";

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data)
  }
  
    render() {
    return (
      <div className="App">
        <header className="App-header">
            <Titles/>
            <Form getWeather={this.getWeather}/>
            <Weather/>
        </header>
      </div>
    );
  }
}

export default App;

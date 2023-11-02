import React, { useState } from "react";
import WeatherInfo from "./weatherinfo";
import WeatherForcast from "./weatherForcast";
import "./App.css";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setcity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setcity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="weatherAppWrapper">
            <div className="weatherApp">
              <div className="row heading">
                <div className="col-md-4">
                  <h1>
                    Howday <i className="fa-regular fa-sun sun"></i>
                  </h1>
                </div>
                <div className="col search">
                  <form
                    className="input-group searchForm"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="search"
                      className="form-control searchBox"
                      placeholder="Enter a city..."
                      id="city-input"
                      autoComplete="off"
                      onChange={handleCityChange}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary searchButton"
                        type="button"
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <WeatherInfo info={weatherData} />
                <WeatherForcast info={weatherData} />
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
            <small>
              <a
                href="https://github.com/mehrimoridinia/Weather-App-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="source"
              >
                Open-source code
              </a>
              , by Parvin Zaman
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    search("New York");
    return "Loading...";
  }
}

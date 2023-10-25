import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: "Wednesday 07:00",
      description: response.data.weather[0].description,
      icon: `"http://openweathermap.org/img/wn/${
        "forecastDay".weather[0].icon
      }@2x.png"`,
    });
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
                  <form className="input-group searchForm">
                    <input
                      type="search"
                      className="form-control searchBox"
                      placeholder="Enter a city..."
                      id="city-input"
                      autocomplete="off"
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
              </div>
              <div className="row day">
                <div className="col-md-4 dayTemp">
                  <img
                    src={weatherData.icon}
                    alt={weatherData.description}
                    id="icon"
                    className="dayIcon"
                  />
                  <span id="temprature">{weatherData.temperature}</span>
                  <span className="units">
                    <a href="a" id="unitC" className="active">
                      °C
                    </a>{" "}
                    |
                    <a href="a" id="unitF">
                      °F
                    </a>
                  </span>
                </div>
                <div className="col-md-4">
                  <ul className="info1">
                    <li id="city" className="cityName">
                      {weatherData.city}
                    </li>
                    <li>
                      Last updated at <span id="date">{weatherData.date}</span>
                    </li>
                    <li id="description">{weatherData.description}</li>
                  </ul>
                </div>
                <div className="col-md-4 info2">
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherData.wind}</span> km/h
                  </li>
                </div>
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
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

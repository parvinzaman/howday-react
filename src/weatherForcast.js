import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";

export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col weather-forecast">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading forecast...";
  }
}

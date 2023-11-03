import React from "react";
import WeatherIcon from "./weatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="weather-forecast-date">{day()}</div>{" "}
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={50} />
      </div>{" "}
      <div
        className="
        weather-forecast-temp"
      >
        <span className="weather-forecast-maxTemp">{maxTemp()}°</span>{" "}
        <span className="weather-forecast-lowTemp"> {minTemp()}°</span>
      </div>
    </div>
  );
}

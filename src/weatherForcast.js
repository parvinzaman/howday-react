import React from "react";
import WeatherIcon from "./weatherIcon";
import "./App.css";

export default function WeatherForcast(props) {
  return (
    <div className="row">
      <div className="col weather-forecast">
        <div className="weather-forecast-date">Tue</div>{" "}
        <div>
          <WeatherIcon code={props.info.icon} size={62} />
        </div>{" "}
        <div
          className="
        weather-forecast-temp"
        >
          <span className="weather-forecast-maxTemp">19°</span>{" "}
          <span className="weather-forecast-lowTemp"> 10°</span>
        </div>
      </div>
    </div>
  );
}

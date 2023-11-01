import React from "react";
import FormattedDate from "./FormattedDate";
import "./index.css";
import WeatherTempUnit from "./weatherTempUnit";
import WeatherIcon from "./weatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row day">
        <div className="col-md-4 dayTemp">
          <WeatherIcon code={props.info.icon} />
          <WeatherTempUnit celsius={props.info.temperature} />
        </div>
        <div className="col-md-4">
          <ul className="info1">
            <li id="city" className="cityName">
              {props.info.city}
            </li>
            <li>
              Last updated at{" "}
              <span id="date">
                <FormattedDate date={props.info.date} />
              </span>
            </li>
            <li id="description">{props.info.description}</li>
          </ul>
        </div>
        <div className="col-md-4 info2">
          <li>
            Humidity: <span id="humidity">{props.info.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{props.info.wind}</span> km/h
          </li>
        </div>
      </div>
    </div>
  );
}

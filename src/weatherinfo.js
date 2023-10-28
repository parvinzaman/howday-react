import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row day">
        <div className="col-md-4 dayTemp">
          <img
            src={props.info.icon}
            alt={props.info.description}
            id="icon"
            className="dayIcon"
          />
          <span id="temprature">{props.info.temperature}</span>
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

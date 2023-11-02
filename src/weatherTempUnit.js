import React, { useState } from "react";
import "./index.css";

export default function WeatherTempUnit(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFar(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCel(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheit() {
    return Math.round((props.celsius * 9) / 5 + 32);
  }
  if (unit === "celsius") {
    return (
      <span className="weatherTempUnit">
        <span className="temp">
          <span id="temprature">{props.celsius}</span>
          <span className="units">
            <a href="a" className="active">
              °C
            </a>
            |
            <a href="a" onClick={convertToFar}>
              °F
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="weatherTempUnit">
        <span className="dayTemp">
          <span id="temprature" className="dayTemp">
            {farenheit()}
          </span>
          <span className="units">
            <a href="a" onClick={convertToCel}>
              °C
            </a>
            |
            <a href="a" className="active">
              °F
            </a>
          </span>
        </span>
      </span>
    );
  }
}

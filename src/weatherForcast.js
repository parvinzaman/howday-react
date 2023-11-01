import React from "react";

export default function WeatherForcast() {
  return (
    <div className="row">
      <div className="col weather-forecast">
        <div className="weather-forecast-date">Tue</div>{" "}
        <img src="a" alt="a" id="icon" className="forcastDayIcon" />{" "}
        <div
          className="
        weather-forecast-temp"
        >
          <span className="weather-forecast-maxTemp">19</span>{" "}
          <span className="weather-forecast-lowTemp"> 10</span>
        </div>
      </div>
    </div>
  );
}

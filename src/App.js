import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="weatherAppWrapper">
          <div class="weatherApp">
            <div class="row heading">
              <div class="col-md-4">
                <h1>
                  Howday <i class="fa-regular fa-sun sun"></i>
                </h1>
              </div>
              <div class="col search">
                <form class="input-group searchForm">
                  <input
                    type="search"
                    class="form-control searchBox"
                    placeholder="Enter a city..."
                    id="city-input"
                    autocomplete="off"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary searchButton"
                      type="button"
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="row day">
              <div class="col-md-4 dayTemp">
                <img src="" alt="weather-icon" id="icon" class="dayIcon" />
                <span id="temprature"></span>
                <span class="units">
                  <a href="a" id="unitC" class="active">
                    °C
                  </a>{" "}
                  |
                  <a href="a" id="unitF">
                    °F
                  </a>
                </span>
              </div>
              <div class="col-md-4">
                <ul class="info1">
                  <li id="city" class="cityName">
                    New York
                  </li>
                  <li>
                    Last updated at <span id="date"></span>
                  </li>
                  <li id="description">Clear</li>
                </ul>
              </div>
              <div class="col-md-4 info2">
                <li>
                  Humidity: <span id="humidity">87</span>%
                </li>
                <li>
                  Wind: <span id="wind">10</span> km/h
                </li>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/mehrimoridinia/Weather-App-Project"
              target="_blank"
              rel="noopener noreferrer"
              class="source"
            >
              Open-source code
            </a>
            , by Parvin Zaman
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;

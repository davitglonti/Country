import React from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherImg from "./WeatherImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faDroplet,
  faTemperatureHalf,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import CountryMap from "./CountryMap";

const CountryWeather = ({ data }) => {
  const [weatherData, setWeatherData] = useState({});
  const param = useParams();
  const dataFilter = data.filter((c) => c.alpha3Code === param.alpha3Code);
  const country = { ...dataFilter[0] };
  let countryLat = country.latlng[0];
  let countryLon = country.latlng[1];

  // Get Countery Weather
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLon}&appid=0c5384957da38b23edd339e175142223`
      )
      .then((res) => {
        setWeatherData(res.data);
      });
  }, [countryLat, countryLon]);

  return (
    <>
      {weatherData.weather ? (
        <Row className=" mt-5 pt-5">
          <Col className="sec-weather" sm="12" md="6" lg="6">
            <h2>Weather {weatherData.name}</h2>
            <div className="weather-info">
              <div className="wather-case pt-2">
                <div>
                  <h3>{weatherData.weather[0].main}</h3>
                  <em>{weatherData.weather[0].description}</em>
                </div>
                <WeatherImg weatherData={weatherData} />
              </div>
              <div className="weather-details">
                <div className="temp">
                  <div className=" fw-bold">Temperature:</div>
                  <div className="temp-degree">
                    <FontAwesomeIcon
                      className="icons"
                      icon={faTemperatureHalf}
                      style={{ fontSize: "23px" }}
                    />
                    {(weatherData.main.temp - 273.15).toFixed(2)} °C
                  </div>
                </div>
                <div className="hum">
                  <div className=" fw-bold">Humidity:</div>
                  <div className="hum-degree">
                    <FontAwesomeIcon icon={faDroplet} className="icons" />
                    {weatherData.main.humidity}%
                  </div>
                </div>
                <div className="cloud">
                  <div className=" fw-bold">Cloudiness:</div>
                  <div className="cloud-degree">
                    <FontAwesomeIcon icon={faCloud} className="icons" />
                    {weatherData.clouds.all}%
                  </div>
                </div>
                <div className="wind">
                  <div className=" fw-bold">Wind speed:</div>
                  <div className="wind-degree">
                    <FontAwesomeIcon icon={faWind} className="icons" />
                    {weatherData.wind.speed} m/s
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="sec-map" sm="12" md="6" lg="6">
            <CountryMap countryLat={countryLat} countryLon={countryLon} />
          </Col>
        </Row>
      ) : (
        ""
      )}
    </>
  );
};

export default CountryWeather;

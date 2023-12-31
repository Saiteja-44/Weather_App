import React, { useEffect, useState } from 'react';
import './style.css';
import Forecast from './Forecast';

function capitalizeWordsAfterSpace(string) {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function WeatherDisplay({ weatherData }) {
  const capitalizedDescription = capitalizeWordsAfterSpace(weatherData.current.weather[0].description);
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    if (weatherData.current && weatherData.current.weather[0]) {
      const iconValue = weatherData.current.weather[0].icon;
      const iconImageUrl = `https://openweathermap.org/img/wn/${iconValue}.png`;
      setIconUrl(iconImageUrl);
    }
  }, [weatherData]);

  function getClassForWeatherDescription(description) {
    if (lowercaseDescription.includes("thunderstorm") || lowercaseDescription.includes("drizzle") || lowercaseDescription.includes("rain")) {
      return "thunderstorm";
    } else if (lowercaseDescription.includes("snow")) {
      return "snow";
    } else if (lowercaseDescription.includes("clear")) {
      return "clear";
    } else if (lowercaseDescription.includes("clouds")) {
      return "clouds";
    } else {
      return "other-conditions";
    }
  }
  const lowercaseDescription = weatherData.current ? weatherData.current.weather[0].description.toLowerCase() : '';

  return (
    <div className={`${getClassForWeatherDescription(lowercaseDescription)}`}>
      <div className="weather">
        {weatherData.current ? (
          <>
            <div className="top">
              <div className="topleft">
                <div className="location">
                  <p>{weatherData.cityName}</p>
                </div>
                <div className="temp">
                  <h1>{weatherData.current.temp.toFixed()}°F</h1>
                </div>
              </div>
              <div className="topright">
                {iconUrl && (
                  <div className="icon">
                    <img src={iconUrl} alt="Weather Icon" />
                  </div>
                )}
                <div className="description">
                  <p>{capitalizedDescription}</p>
                </div>
              </div>
            </div>
            <div className="down-container">
              <div className="bottom">
                <div className="feels">
                  <p className="bold">{weatherData.current.feels_like.toFixed()}°F</p>
                  <p>Feels Like</p>
                </div>
                <div className="humidity">
                  <p className="bold">{weatherData.current.humidity}%</p>
                  <p>Humidity</p>
                </div>
                <div className="wind">
                  <p className="bold">{weatherData.current.wind_speed.toFixed()} MPH</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              {weatherData !== null ? (
                <>
                  <Forecast forecastData={weatherData.hourly.slice(0, 15)} title="Hourly Forecast" />
                  <Forecast forecastData={weatherData.daily} title="Daily Forecast" />
                </>
              ) : null}
            </div>
          </>
        ) : (
          <p>Please enter a valid ZIP code.</p>
        )}
      </div>     
    </div>
  );
}

export default WeatherDisplay;


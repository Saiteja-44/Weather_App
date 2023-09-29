import React, { useState } from 'react';
import './style.css';
import WeatherDisplay from './WeatherDisplay';
import Zipcode from './Zipcode';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '938cc58fae1c1a679c22bbbd14c27c3b';

  const handleZipcodeSubmit = async (inputZipcode) => {
    try {
      const zipResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/zip?zip=${inputZipcode}&appid=${apiKey}`
      );

      if (zipResponse.status === 200 && zipResponse.data.lat && zipResponse.data.lon) {
        const cityName = zipResponse.data.name;
        const weatherResponse = await axios.get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${zipResponse.data.lat}&lon=${zipResponse.data.lon}&appid=${apiKey}&units=imperial`
        );

        if (weatherResponse.status === 200) {
          setWeatherData({ ...weatherResponse.data, cityName });
        } else {
          console.error('Failed to fetch weather data');
        }
      } else {
        console.error('Failed to fetch ZIP code data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="app">
      <Zipcode handleZipcodeSubmit={handleZipcodeSubmit} />
      {weatherData !== null ? (
        <WeatherDisplay weatherData={weatherData} />
      ) : null}
    </div>
  );
}

export default App;



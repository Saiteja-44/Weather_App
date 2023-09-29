import React, { useState } from 'react';

function Forecast({ forecastData, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`forecast ${isOpen ? 'active' : ''}`} onClick={toggleCollapsible}>
      <div className="forecast-title">
        <h2>{title}</h2>
        <div className="forecast-toggle-container">
          <div className="forecast-toggle-button">▼</div>
        </div>
      </div>
      {isOpen && (
        <div className="forecast-container">
          <div className="forecast-scroll">
            {title === 'Hourly Forecast' ? (
              forecastData.map((hour, index) => (
                <div key={index} className="forecast-item">
                  <div className="forecast-time">
                    {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                  <div className="forecast-icon">
                    <img
                      src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                      alt={hour.weather[0].description}
                    />
                  </div>
                  <div className="forecast-temp">{hour.temp.toFixed()}°F</div>
                </div>
              ))
            ) : (
              forecastData.map((day, index) => (
                <div key={index} className="forecast-item">
                  <div className="forecast-day">
                    {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                  </div>
                  <div className="forecast-icon">
                    <img
                      src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                      alt={day.weather[0].description}
                    />
                  </div>
                  <div className="forecast-min-max">
                    <span className="forecast-min">{day.temp.min.toFixed()}°F</span>/
                    <span className="forecast-max">{day.temp.max.toFixed()}°F</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Forecast;






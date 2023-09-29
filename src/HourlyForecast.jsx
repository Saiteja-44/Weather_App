import React, { useState } from 'react';

function HourlyForecast({ hourlyData }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hourly-forecast">
      <div className={`hourly-title ${isOpen ? 'active' : ''}`} onClick={toggleCollapsible}>
        <h2>Hourly Forecast</h2>
        <div className="hourly-toggle-button">▼</div>
      </div>
      {isOpen && (
        <div className="hourly-forecast-container">
          <div className="hourly-scroll">
            {hourlyData.slice(0, 15).map((hour, index) => (
              <div key={index} className="hourly-forecast-item">
                <div className="hourly-forecast-time">
                  {new Date(hour.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="hourly-forecast-icon">
                  <img
                    src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                    alt={hour.weather[0].description}
                  />
                </div>
                <div className="hourly-forecast-temp">{hour.temp.toFixed()}°F</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HourlyForecast;








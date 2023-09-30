import React, { useState } from 'react';
import './style.css';
import Icon from "./assets/weather.svg";

function Zipcode({ handleZipcodeSubmit }) {
  const [inputZipcode, setInputZipcode] = useState('');
  const [isCentered, setIsCentered] = useState(true); // Add isCentered state
  const [isInvalidZipcode, setIsInvalidZipcode] = useState(false); // Add isInvalidZipcode state

  const handleInputChange = (e) => {
    setInputZipcode(e.target.value);
    setIsInvalidZipcode(false); // Reset the invalid state when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputZipcode.trim() !== '') {
      // Replace the condition with your actual ZIP code validation logic
      if (inputZipcode.length === 5 && /^\d+$/.test(inputZipcode)) {
        handleZipcodeSubmit(inputZipcode);
        setIsCentered(false); // Move the input field to the top
        setIsInvalidZipcode(false); // Reset the invalid state
      } else {
        setIsInvalidZipcode(true); // Set invalid state if ZIP code is not valid
      }
    }
  };

  return (
    <div className={`search ${isCentered ? 'centered' : ''}`}>
      <div className={`search-container ${isInvalidZipcode ? 'invalid' : ''}`}>
        <div className="imagecontainer">
          <img src={Icon} alt="Landing" className="landingimg" />
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter ZIP code"
            value={inputZipcode}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit(e);
              }
            }}
          />
          <i
            className="fa fa-search search-icon"
            onClick={handleSubmit}
            title="Search"
          ></i>
        </div>
        {isInvalidZipcode && (
          <p className="error-message">Please enter a valid ZIP code.</p>
        )}
      </div>
    </div>
  );
}

export default Zipcode;

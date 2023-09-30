import React, { useState } from 'react';
import './style.css';
import Icon from "./assets/weather.svg";


function Zipcode({ handleZipcodeSubmit }) {
  const [inputZipcode, setInputZipcode] = useState('');
  const [isCentered, setIsCentered] = useState(true); // Add isCentered state

  const handleInputChange = (e) => {
    setInputZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputZipcode.trim() !== '') {
      handleZipcodeSubmit(inputZipcode);
      setIsCentered(false); // Move the input field to the top
    }
  };

  return (
    <div className={`search ${isCentered ? 'centered' : ''}`}>
      <div>
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
    </div>
  );
}

export default Zipcode;
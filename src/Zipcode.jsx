import React, { useState } from 'react';
import './style.css';

function Zipcode({ handleZipcodeSubmit }) {
  const [inputZipcode, setInputZipcode] = useState('');
  const [isCentered, setIsCentered] = useState(true);

  const handleInputChange = (e) => {
    setInputZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleZipcodeSubmit(inputZipcode);
    setInputZipcode('');
    setIsCentered(false); // Move to the top after submitting
  };

  return (
    <div className={`search ${isCentered ? 'centered' : ''}`}>
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

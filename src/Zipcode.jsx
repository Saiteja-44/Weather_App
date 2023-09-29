import React, { useState } from 'react';
import './style.css';

function Zipcode({ handleZipcodeSubmit }) {
  const [inputZipcode, setInputZipcode] = useState('');

  const handleInputChange = (e) => {
    setInputZipcode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleZipcodeSubmit(inputZipcode);
    setInputZipcode('');
  };

  return (
    <div className="search">
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
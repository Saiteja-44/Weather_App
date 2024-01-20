import React, { useEffect, useState } from "react";
import "./style.css";
import Icon from "./assets/weather.svg";
import axios from "axios";

function Zipcode({ handleZipcodeSubmit }) {
  const [inputZipcode, setInputZipcode] = useState("");
  const [isCentered, setIsCentered] = useState(true);
  const [isInvalidZipcode, setIsInvalidZipcode] = useState(false);
  const apiKey = "938cc58fae1c1a679c22bbbd14c27c3b";

  const handleInputChange = (e) => {
    setInputZipcode(e.target.value);
    setIsInvalidZipcode(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputZipcode.trim() !== "") {
      if (inputZipcode.length === 5 && /^\d+$/.test(inputZipcode)) {
        try {
          const zipResponse = await axios.get(
            `https://api.openweathermap.org/geo/1.0/zip?zip=${inputZipcode}&appid=${apiKey}`
          );

          if (zipResponse.status === 200) {
            handleZipcodeSubmit(inputZipcode);
            setIsCentered(false);
          } else {
            console.error("API Error:", zipResponse.status);
          }
        } catch (error) {
          console.error("Error:", error);
          setIsInvalidZipcode(true);
        }
      } else {
        setIsInvalidZipcode(true);
      }
    }
  };
  useEffect(() => {
    console.log(isInvalidZipcode);
  }, [isInvalidZipcode]);
  return (
    <div className={`search ${isCentered ? "centered" : ""}`}>
      <div className="search-container">
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
              if (e.key === "Enter") {
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

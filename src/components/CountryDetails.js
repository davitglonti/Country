import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import CountryInfo from "./CountryInfo";
import CountryWeather from "./CountryWeather";

const CountryDetails = ({ data }) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  const navigate = useNavigate();
  return (
    <div className=" px-5 py-5">
      <button onClick={() => navigate(-1)} className="go-back">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Back</span>
      </button>
      <CountryInfo data={data} />
      <CountryWeather data={data} />
    </div>
  );
};

export default CountryDetails;

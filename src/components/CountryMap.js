import React from "react";

const CountryMap = ({ countryLat, countryLon }) => {
  return (
    <iframe
      src={`https://www.google.com/maps?q=${countryLat},${countryLon}&z=5&ie=UTF8&iwloc=&output=embed`}
      frameborder="5"
      title="CountryMap"
      style={{ width: "600px", height: "400px" }}
      className="iframe-map"
    ></iframe>
  );
};

export default CountryMap;

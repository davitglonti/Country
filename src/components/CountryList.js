import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CountryList({ country }) {
  const [borderCountries, setBorderCountries] = useState([]);

  useEffect(() => {
    if (country.borders) {
      const getData = async () => {
        const borderData = await axios.get(
          `https://restcountries.com/v2/alpha?codes=${country.borders.join()}`
        );
        setBorderCountries(borderData.data);
      };
      getData();
    }
  }, [country.borders]);

  return (
    <ul className="d-flex">
      {country.borders !== undefined ? (
        borderCountries.map((borderCountry, index) => (
          <Link to={`/country/${borderCountry.alpha3Code}`}>
            <li key={borderCountry.alpha3Code}>{borderCountry.name}</li>
          </Link>
        ))
      ) : (
        <li className="empty">No Countries</li>
      )}
    </ul>
  );
}

export default CountryList;

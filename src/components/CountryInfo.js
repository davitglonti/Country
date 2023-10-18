import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CountryList from "./CountryList";

const CountryInfo = ({ data }) => {
  const param = useParams();
  const dataFilter = data.filter((c) => c.alpha3Code === param.alpha3Code);
  const country = { ...dataFilter[0] };

  return (
    <Row className=" py-5">
      <Col className="sec-img" sm="12" md="6" lg="6">
        <div className="flag-img">
          <img src={country.flags.svg} alt="" />
        </div>
      </Col>
      <Col className="sec-data px-5" sm="12" md="6" lg="6">
        <div>
          <h2 className="px-2">{country.name}</h2>
          <div className="data d-flex justify-content-between">
            <ul>
              <li>
                <span className="fw-bold">Native Name: </span>
                {country.nativeName}
              </li>
              <li>
                <span className="fw-bold">Population: </span>
                {country.population.toLocaleString("en-US")}
              </li>
              <li>
                <span className="fw-bold">Region: </span>
                {country.region}
              </li>
              <li>
                <span className="fw-bold">Sub Region: </span>
                {country.subregion}
              </li>
              <li>
                <span className="fw-bold"> Capital: </span>
                {country.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span className="fw-bold">Top Level Domain: </span>
                {country.topLevelDomain}
              </li>
              <li>
                <span className="fw-bold">Currencies: </span>
                {country.currencies !== undefined ? (
                  country.currencies[0].name
                ) : (
                  <span>No Currencies</span>
                )}
              </li>
              <li>
                <span className="fw-bold">Languages: </span>
                {country.languages[0].name}
              </li>
            </ul>
          </div>
          <div
            className="borders d-flex align-items-center pt-5 py-2"
            style={{ marginLeft: "10px" }}
          >
            <p>
              <strong>Border Countries:</strong>
            </p>
            <CountryList country={country} />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CountryInfo;

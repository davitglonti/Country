import React from "react";
import CountryCard from "./CountryCard";
import { Row } from "react-bootstrap";

const Countries = ({ data }) => {
  return (
    <div className="container-fluid">
      <Row className="d-flex">
        {data.map((country) => {
          return <CountryCard key={country.numericCode} country={country} />;
        })}
      </Row>
    </div>
  );
};

export default Countries;

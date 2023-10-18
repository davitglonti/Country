import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Col lg="4" md="6" sm="12" className="px-5 mb-4">
      <Link to={`/country/${country.alpha3Code}`}>
        <Card className="mb-5">
          <Card.Img variant="top" src={country.flags.svg} />
          <Card.Body>
            <Card.Title>
              <h2 className="fw-bold mx-2">{country.name}</h2>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>
                  <strong>Population:</strong>{" "}
                  {country.population.toLocaleString("en-US")}
                </li>
                <li>
                  <strong>Region:</strong> {country.region}
                </li>
                <li>
                  <strong>Capital:</strong> {country.capital}
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CountryCard;

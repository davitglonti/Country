import React, { useState } from "react";
import { data } from "../data";
import Countries from "./Countries";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("All");

  // Filtered data based on search and region
  const filteredData = data.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());
    const matchesRegion =
      selectValue === "All" || selectValue === country.region;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="section py-5">
        <div className="div-section d-flex justify-content-between align-items-center px-5">
          <form>
            <input
              type="text"
              placeholder="Search for a country..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </form>
          <select
            aria-label="Default select example"
            style={{ fontSize: "14px" }}
            onChange={(e) => setSelectValue(e.target.value)}
            value={selectValue}
          >
            <option value="none" hidden>
              Filter by Region{" "}
            </option>
            <option value="All">All Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <Countries data={filteredData} />
    </>
  );
};

export default Home;

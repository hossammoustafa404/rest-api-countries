import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import CountryItem from "./CountryItem";
import { Row } from "react-bootstrap";
import AppSpinner from "./AppSpinner";
import styled from "styled-components";

const CountriesList = () => {
  const { countries, status, region, searchedCountry, darkMode } =
    useContext(CountriesContext);

  let filteredCountries = countries.slice(0, 12).filter((country, index) => {
    if (index == 3 || index == 6 || index == 9 || index == 8) {
      return;
    }
    return country;
  });

  if (region !== "All") {
    filteredCountries = filteredCountries
      .slice(0, 8)
      .filter((country) => country.region === region);
  }

  if (searchedCountry !== "") {
    filteredCountries = filteredCountries.filter(
      (country) =>
        country.name.common.toLowerCase() === searchedCountry.toLowerCase()
    );
  }

  const renderedCountries = filteredCountries
    .slice(0, 8)
    .map((country) => <CountryItem key={country.area} country={country} />);

  return (
    <MainWrapper darkmode={darkMode} className="mt-5">
      <Row>
        {status === "idle" ? (
          renderedCountries.length ? (
            renderedCountries
          ) : (
            <span>Not found</span>
          )
        ) : (
          <AppSpinner />
        )}
      </Row>
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  span {
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
  }
`;
export default CountriesList;

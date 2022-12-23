import React, { useContext, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { CountriesContext } from "../context/CountriesContext";

const AppSearchField = () => {
  const { darkMode, handleSearchedCountry } = useContext(CountriesContext);
  const [inputVal, setInputVal] = useState("");

  window.onkeydown = (e) => {
    if (e.key === "Enter") {
      handleSearchedCountry(inputVal);
      setInputVal("");
    }
  };

  return (
    <SearchFieldWrapper
      darkmode={darkMode}
      className="py-2 ps-4 d-flex align-items-center gap-4"
    >
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        type="text"
        id="search-input"
        className="w-100 pe-3"
        placeholder="Search for a country"
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
    </SearchFieldWrapper>
  );
};

export default AppSearchField;

const SearchFieldWrapper = styled.div`
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 0.6rem;
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeElements)"
      : "var(--lightModeBackground)"};

  .search-icon,
  #search-input,
  #search-input::placeholder {
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
  }
  #search-input,
  #search-input:focus {
    background-color: inherit;
  }
  #search-input::placeholder {
    font-size: 0.9rem;
  }
`;

import React, { useContext } from "react";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const AppFilter = () => {
  const { darkMode, regions, handleRegion } = useContext(CountriesContext);
  const [selectVal, setSelectVal] = useState("");
  const renderedRegions = regions.map((region, index) => (
    <option key={index} value={region}>
      {region}
    </option>
  ));
  return (
    <>
      <SelectWrapper
        darkmode={darkMode}
        className="w-100 ps-3 py-2"
        name="Continents"
        value={selectVal}
        onChange={(e) => {
          setSelectVal(e.target.value);
          handleRegion(e.target.value);
        }}
      >
        <option value="" disabled hidden>
          select a region
        </option>
        <option value="All">All</option>

        {renderedRegions}
      </SelectWrapper>
    </>
  );
};

export default AppFilter;

const SelectWrapper = styled(Form.Select)`
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeElements)"
      : "var(--lightModeBackground)"};

  color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeTextAndLightModeElements)"
      : "var(--lightModeText)"};

  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

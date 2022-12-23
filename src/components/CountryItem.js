import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";

const CountryItem = ({ country }) => {
  const { darkMode, handleDetails } = useContext(CountriesContext);

  return (
    <div className="col-sm-6 col-lg-3 g-5 ">
      <BoxWrapper darkmode={darkMode} className="box w-100">
        <Link
          to="/details"
          onClick={() => {
            handleDetails(country.name.common);
          }}
        >
          <img
            className="flag-img w-100"
            src={country.flags.png}
            alt=""
            // onClick={() => {
            //   handleDetails(country.name.common);
            // }}
          />
        </Link>
        <div className="text mt-4 px-4 pb-4">
          <h3 className="name text-capitalize">{country.name.common}</h3>

          <h4 className="pop mt-4">
            Population : <span className="pop-num">{country.population}</span>
          </h4>

          <h4 className="reg">
            Region : <span className="reg-name">{country.region}</span>
          </h4>

          <h4 className="cap">
            Capital : <span className="cap-name">{country.capital}</span>
          </h4>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default CountryItem;

const BoxWrapper = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeElements)"
      : "var(--lightModeBackground)"};
  border-radius: 0.6rem;
  .flag-img {
    height: 12rem;
    border-radius: 0.6rem 0.6rem 0 0;
  }

  h3,
  h4 {
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 1.3rem;
  }
  h4 {
    font-size: 1rem;
  }
  span {
    margin-left: 0.6rem;
    color: hsl(0, 0%, 52%);
  }
`;

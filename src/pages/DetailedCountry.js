import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const DetailedCountry = () => {
  const { detailedCountry, darkMode } = useContext(CountriesContext);
  const nativeNameArr = Object.values(detailedCountry.name.nativeName);
  const nativeName = nativeNameArr[0].common;

  const currenciesArr = Object.values(detailedCountry.currencies);
  const currencies = currenciesArr[0].name;

  const langs = Object.values(detailedCountry.languages);
  const renderedLangs = langs.map((lang, index) => (
    <span key={index}>
      {index > 0 && ", "}
      {lang}
    </span>
  ));

  let renderedBorderCountries = [];
  if (detailedCountry.borders) {
    renderedBorderCountries = detailedCountry.borders.map((bCountry, index) => (
      <span className="border-country me-3" key={index}>
        {bCountry}
      </span>
    ));
  }

  return (
    <DetailsWrapper darkmode={darkMode} className="pb-5">
      <Container>
        <Link className="back-btn " to="/">
          <FontAwesomeIcon icon={faLeftLong} className="me-2" />
          Back
        </Link>
        <Row className="align-items-center">
          <div className="col-10 col-lg-4 mx-auto mx-lg-0">
            <img
              className="flag-img w-100"
              src={detailedCountry.flags.png}
              alt=""
            />
          </div>
          <div className="col-10 col-lg-7 mx-auto mt-5 mt-lg-0">
            <main className="info">
              <div className="top-box d-lg-flex align-items-center">
                <div className="left-box">
                  <h3 className="country-name">
                    {detailedCountry.name.common}
                  </h3>

                  <h4 className="country-native-name mt-4">
                    Native Name : <span>{nativeName}</span>
                  </h4>
                  <h4 className="country-population mt-3">
                    Population : <span>{detailedCountry.population}</span>
                  </h4>
                  <h4 className="country-region mt-3">
                    Region : <span>{detailedCountry.region}</span>
                  </h4>
                  <h4 className="country-sub-region mt-3">
                    Sub Region : <span>{detailedCountry.subregion}</span>
                  </h4>
                  <h4 className="country-sub-region mt-3">
                    Capital : <span>{detailedCountry.capital}</span>
                  </h4>
                </div>
                <div className="right-box mt-5 ms-lg-auto mt-lg-0">
                  <h4 className="country-tld">
                    Top Level Domain : <span>{detailedCountry.tld}</span>
                  </h4>
                  <h4 className="country-currencies mt-3">
                    Currencies : <span>{currencies}</span>
                  </h4>
                  <h4 className="country-langs mt-3 d-flex gap-1">
                    Languages :
                    <span className="langs-box d-flex gap-1">
                      {renderedLangs}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="country-borders mt-5">
                <Row className="align-items-center">
                  <div className="col-lg-4 mb-3 mb-lg-0">
                    <h4>Borders Countries :</h4>
                  </div>
                  <div className="col-lg-8">
                    {detailedCountry.borders ? (
                      <div className="d-flex gap-2 borders">
                        {renderedBorderCountries}
                      </div>
                    ) : (
                      <span>Not Found</span>
                    )}
                  </div>
                </Row>
              </div>
            </main>
          </div>
        </Row>
      </Container>
    </DetailsWrapper>
  );
};

export default DetailedCountry;

const DetailsWrapper = styled.section`
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeBackground)"
      : "var(--darkModeTextAndLightModeElements)"};
  min-height: 100vh;
  padding-top: 3rem;

  .info {
    flex-wrap: wrap;
  }

  .borders {
    flex-wrap: wrap;
  }
  .back-btn,
  .border-country {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
    background-color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeElements)"
        : "var(--lightModeBackground)"};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .border-country {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 0;
  }
  span {
    color: hsl(0, 0%, 52%);
  }
  h3,
  h4 {
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
  }

  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1rem;
  }
`;

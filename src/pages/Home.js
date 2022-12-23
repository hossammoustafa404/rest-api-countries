import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import AppFilter from "../components/AppFilter";
import AppSearchField from "../components/AppSearchField";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";
import CountriesList from "../components/CountriesList";

const Home = () => {
  const { darkMode } = useContext(CountriesContext);
  return (
    <SectionWrapper className="countries pt-5 pb-5" darkmode={darkMode}>
      <Container className="px-4">
        <Row className="align-items-center">
          <div className="col-sm-6 col-md-7 col-lg-5">
            <AppSearchField />
          </div>

          <div className="mt-5 mt-sm-0 ms-sm-auto col-6 col-sm-5 col-md-4 col-lg-3">
            <AppFilter />
          </div>
        </Row>
        <CountriesList />
      </Container>
    </SectionWrapper>
  );
};

export default Home;

const SectionWrapper = styled.section`
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeBackground)"
      : "var(--darkModeTextAndLightModeElements)"};
  min-height: 100vh;
`;

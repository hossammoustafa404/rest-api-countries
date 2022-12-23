import React, { useContext } from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { CountriesContext } from "../context/CountriesContext";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const { darkMode, handleDarkMode, resetHome } = useContext(CountriesContext);

  return (
    <NavBarWrappper darkmode={darkMode}>
      <Container className="py-2 px-4">
        <NavbarBrand>
          <Link className="home-link" to="/" onClick={resetHome}>
            <h1 className="fs-5 mb-0 title fw-bold">Where in the world?</h1>
          </Link>
        </NavbarBrand>

        <button className="text-capitalize fs-6" onClick={handleDarkMode}>
          <FontAwesomeIcon icon={faMoon} className="me-2" />
          {darkMode === "dark" ? "Light mode" : "Dark mode"}
        </button>
      </Container>
    </NavBarWrappper>
  );
};

const NavBarWrappper = styled(Navbar)`
  background-color: ${(props) =>
    props.darkmode === "dark"
      ? "var(--darkModeElements)"
      : "var(--lightModeBackground)"};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .title,
  button {
    color: ${(props) =>
      props.darkmode === "dark"
        ? "var(--darkModeTextAndLightModeElements)"
        : "var(--lightModeText)"};
  }
  .home-link {
    text-decoration: none;
  }
`;

export default AppNavbar;
// var(--darkModeTextAndLightModeElements)

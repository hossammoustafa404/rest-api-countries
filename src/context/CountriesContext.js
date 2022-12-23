import { createContext, useEffect, useState } from "react";

export const CountriesContext = createContext();

const CountriesProvider = ({ children }) => {
  // Properties
  const [countries, setCountries] = useState([]);
  const [status, setStatus] = useState("loading");
  const [darkMode, setDarkMode] = useState("light");
  const [region, setRegion] = useState("All");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [detailedCountry, setDetailedCountry] = useState("");

  const regions = [
    ...new Set(
      countries
        .slice(0, 12)
        .map((country) => country.region)
        .filter((country, index) => {
          if (index == 3 || index == 6 || index == 9 || index == 8) {
            return;
          }
          return country;
        })
    ),
  ];

  // Methods
  const handleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  };

  const handleRegion = (value) => {
    setRegion(value);
    setSearchedCountry("");
  };

  const handleSearchedCountry = (value) => {
    setSearchedCountry(value);
  };

  const handleDetails = (name) => {
    resetHome();
    let country = {};
    for (let i = 0; i < 12; i++) {
      if (countries[i].name.common === name) {
        country = countries[i];
        break;
      }
    }
    setDetailedCountry(country);
  };

  const resetHome = () => {
    setRegion("All");
    setSearchedCountry("");
  };
  // State
  const state = {
    // State properties
    regions: regions,
    region: region,
    countries: countries,
    status: status,
    darkMode: darkMode,
    searchedCountry: searchedCountry,
    detailedCountry: detailedCountry,

    // State methods
    handleDarkMode: handleDarkMode,
    handleRegion: handleRegion,
    handleSearchedCountry: handleSearchedCountry,
    handleDetails: handleDetails,
    resetHome: resetHome,
  };

  // Fetch function
  const fetchCountries = async () => {
    setStatus("loading");
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
    setStatus("idle");
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider value={state}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;

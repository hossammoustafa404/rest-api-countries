import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import CountriesProvider from "./context/CountriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountriesProvider>
  </React.StrictMode>
);

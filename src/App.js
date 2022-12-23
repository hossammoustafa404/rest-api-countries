import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import DetailedCountry from "./pages/DetailedCountry";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailedCountry />} />
      </Routes>
    </>
  );
};

export default App;



import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/services/Services";
import Destinations from "./Components/Destination/Destinations";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Services />
              <Destinations />
            </>
          }
        />
        <Route path="/study/:slug" element={<CountryDetail />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}



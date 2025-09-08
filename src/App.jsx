

import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/services/Services";
import Destinations from "./Components/Destination/Destinations";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import Find from "./pages/black-link/Find";
import Footer from "./Components/Footer/Footer";

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
        <Route path="/pages/English" element={<English />} />
        <Route path="/pages/Events" element={<Events />} />
        <Route path="/pages/Find" element={<Find />} />
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>Page Not Found</h2>
              <Link to="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
                Go back home
              </Link>
            </div>
          }
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}



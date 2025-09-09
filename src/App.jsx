import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/services/Services";
import Destinations from "./Components/Destination/Destinations";
export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Services />
              <Destinations />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

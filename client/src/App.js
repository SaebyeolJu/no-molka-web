/** @format */

import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

import Intro from "./pages/Intro";
import Map from "./pages/Map";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Map />
        </div>
        {/* <Intro /> */}
        <Routes>
          <Route path="/map" component={Map} />
          <Route path="/news" component={News} />
          <Route path="/notfound" component={NotFound} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

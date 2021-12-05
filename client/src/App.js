/** @format */

import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Map from "./pages/Map";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <>
            <div className="container">
              <Navbar />
              <Route path="/map" component={Map} />
              <Route path="/news" component={News} />
              <Route path="/notfound" component={NotFound} />
            </div>
          </>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React from "react";

import "./nav.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FoodForm from "../Food/food";
import Home from "../Home/home";

function Nav() {
  return (
    <Router>
      {/* <h3>hi</h3> */}
      <nav className="nav">
        <div id="foodLink">
          <Link to="/food">Eat 🍴</Link>
        </div>
        {/* &nbsp; */}
        <div id="cityLink">
          <Link to="/city">Visit 👀</Link>
        </div>
        {/* &nbsp; */}
        <div id="countryLink">
          <Link to="/country">Stay ✈️</Link>
        </div>
        {/* &nbsp; */}
        <div id="bookLink">
          <Link to="/book">Read 📚</Link>
        </div>
        {/* &nbsp; */}
        <div id="teleLink">
          <Link to="/tele">Binge 📺</Link>
        </div>
        {/* &nbsp; */}
        <div id="filmLink">
          <Link to="/film">Watch 🎬</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/food" element={<FoodForm />} />
        {/* <Food />
          </Route> */}
        <Route path="/" element={<Home />} />
        {/* <Home />
          </Route> */}
      </Routes>
      {/* </div> */}
    </Router>
  );
}

export default Nav;

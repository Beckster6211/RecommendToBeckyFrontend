import React from "react";

import "./nav.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import FoodForm from "../Food/food";
import Home from "../Home/home";

function Nav() {
  return (
    <Router>
      {/* <h3>hi</h3> */}
      <nav id="nav">
        <Link to="/food">Eat 🍴</Link>
        {/* &nbsp; */}
        <Link to="/city">Visit 👀</Link>
        {/* &nbsp; */}
        <Link to="/country">Stay ✈️</Link>
        {/* &nbsp; */}
        <Link to="/book">Read 📚</Link>
        {/* &nbsp; */}
        <Link to="/tele">Binge 📺</Link>
        {/* &nbsp; */}
        <Link to="/film">Watch 🎬</Link>
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

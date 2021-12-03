import React from "react";

import "./nav.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ReadForm from "../Read/read";
import StayForm from "../Stay/stay";
import VisitForm from "../Visit/visit";
import FoodForm from "../Food/food";
import Home from "../Home/home";

function Nav() {
  return (
    <Router>
      {/* <h3>hi</h3> */}
      <nav className="nav">
        <div className="foodLink">
          <Link to="/food">Eat 🍴</Link>
        </div>
        {/* &nbsp; */}
        <div className="cityLink">
          <Link to="/visit">Visit 👀</Link>
        </div>
        {/* &nbsp; */}
        <div className="countryLink">
          <Link to="/stay">Stay ✈️</Link>
        </div>
        {/* &nbsp; */}
        <div className="bookLink">
          <Link to="/read">Read 📚</Link>
        </div>
        {/* &nbsp; */}
        <div className="teleLink">
          <Link to="/tele">Binge 📺</Link>
        </div>
        {/* &nbsp; */}
        <div className="filmLink">
          <Link to="/film">Watch 🎬</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/food" element={<FoodForm />} />
        <Route path="/visit" element={<VisitForm />} />
        <Route path="/stay" element={<StayForm />} />
        <Route path="/read" element={<ReadForm />} />
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

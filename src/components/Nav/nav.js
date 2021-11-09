import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Food from "../Food/food";
import Home from "../Home/home";

function Nav() {
  return (
    <Router>
      {/* <div> */}
      {/* <h3>hi</h3> */}

      <ReactBootStrap.Navbar
        //   collapseOnSelect
        //   expand="sm"
        bg="light"
        variant="light"
        //   style={{ justifyContent: "space-between" }}
      >
        {/* <nav> */}
        {/* <Link to="/">
            <ReactBootStrap.Navbar.Brand>Home</ReactBootStrap.Navbar.Brand>
          </Link> */}
        {/* &nbsp; */}
        {/* <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav"> */}
        <ReactBootStrap.Nav variant="tabs" className="justify-content-end">
          {/* <Link to="/food"> */}
          <ReactBootStrap.Nav.Link href="/food">Eat</ReactBootStrap.Nav.Link>
          {/* </Link> */}
          <ReactBootStrap.Nav.Link href="/city">Visit</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/country">
            Stay
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/book">Read</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/tele">Binge</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/film">Watch</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
        {/* </ReactBootStrap.Navbar.Collapse> */}
        {/* </nav> */}
      </ReactBootStrap.Navbar>
      <Routes>
        <Route path="/food" element={<Food />} />
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

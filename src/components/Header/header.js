import React from "react";
import "./header.css";

import Login from "../Login/login";
import Logout from "../Logout/logout";

function Header() {
  return (
    <div>
      <header className="header">
        <Login />
        <a className="headerText" href="/">
          Recommend To Becky
        </a>
        <Logout />
      </header>
    </div>
  );
}

export default Header;

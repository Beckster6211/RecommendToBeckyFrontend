import React from "react";

import "./header.css";

import Login from "../Login/login";
import Logout from "../Logout/logout";

// import { Heading } from "@chakra-ui/react";

function Header() {
  return (
    <div>
      {/* <header>Header</header> */}
      <header className="header">
        <Login />
        <a href="/">Recommend To Becky</a>
        <Logout />
      </header>
    </div>
  );
}

export default Header;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";

import Login from "../Login/login";
import Logout from "../Logout/logout";

// import { Heading } from "@chakra-ui/react";

function Header() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      {/* <header>Header</header> */}
      <header className="header">
        <img
          className="loginPic"
          src="./Capture.PNG"
          onClick={() => loginWithRedirect()}
        />
        {/* <Login /> */}
        <a className="headerText" href="/">
          Recommend To Becky
        </a>
        <img
          className="logoutPic"
          src="./Capture1.PNG"
          onClick={() => loginWithRedirect()}
        />
        {/* <Logout /> */}
      </header>
    </div>
  );
}

export default Header;

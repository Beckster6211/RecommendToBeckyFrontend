import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";

import Login from "../Login/login";
import Logout from "../Logout/logout";

function Header() {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  return (
    <div>
      <header className="header">
        {/* <img
          className="loginPic"
          src="./Capture.PNG"
          alt="SoC avatar"
          onClick={() => loginWithRedirect()}
        /> */}
        <Login />
        <a className="headerText" href="/">
          Recommend To Becky
        </a>
        {/* <img
          className="logoutPic"
          src="./Capture1.PNG"
          alt="Quackers head"
          onClick={() => logout({ returnTo: window.location.origin })}
        /> */}
        <Logout />
      </header>
    </div>
  );
}

export default Header;

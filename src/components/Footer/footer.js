import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import "./footer.css";

import Login from "../Login/login";
import Logout from "../Logout/logout";

// import { Heading } from "@chakra-ui/react";

function Footer() {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  return (
    <div>
      {/* <header>Header</header> */}
      <footer className="footer">
        {/* <img
          className="loginPic"
          src="./Capture.PNG"
          alt="SoC avatar"
          onClick={() => loginWithRedirect()}
        /> */}
        <img className="logoutPic" src="./Capture1.PNG" alt="Quackers head" />
        {/* <Login /> */}
        <a className="footerText" href="/">
          Becky Recommends <br />
          <small>
            <small>To You</small>
          </small>
        </a>
        {/* <img
          className="logoutPic"
          src="./Capture1.PNG"
          alt="Quackers head"
          onClick={() => logout({ returnTo: window.location.origin })}
        /> */}
        {/* <Logout /> */}
        <img className="loginPic" src="./Capture.PNG" alt="SoC avatar" />
      </footer>
    </div>
  );
}

export default Footer;

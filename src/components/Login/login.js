import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    // <button id="loginButton" onClick={() => loginWithRedirect()}>
    <img
      id="pictureForLogin"
      className="loginPic"
      src="./Capture.PNG"
      alt="SoC avatar"
      onClick={() => loginWithRedirect()}
    />
    // <img
    //   id="loginPic"
    //   src="./Capture.PNG"
    //   onClick={() => loginWithRedirect()}
    // />
    // </button>
  );
}

export default Login;

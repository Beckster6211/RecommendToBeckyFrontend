import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <img
      id="pictureForLogin"
      className="loginPic"
      src="./Capture.PNG"
      alt="SoC avatar"
      onClick={() => loginWithRedirect()}
    />
  );
}

export default Login;

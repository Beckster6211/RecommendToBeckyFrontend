import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import "./logout.css";

function Logout() {
  const { logout } = useAuth0();
  return (
    <img
      className="logoutPic"
      src="./Capture1.PNG"
      alt="Quackers head"
      onClick={() => logout({ returnTo: window.location.origin })}
    />
  );
}

export default Logout;

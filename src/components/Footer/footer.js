import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <img
          className="footerPics"
          src="./Capture1.PNG"
          alt="Quackers head"
          width="100px"
        />
        <a className="footerText" href="/">
          Becky <br /> Recommends
        </a>
        {/* <h3 className="headerText">
          Becky <br /> Recommends
        </h3> */}
        <img
          className="footerPics"
          src="./Capture.PNG"
          alt="SoC avatar"
          width="100px"
        />
      </footer>
    </div>
  );
}

export default Footer;

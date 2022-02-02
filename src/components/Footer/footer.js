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
        <a
          className="footerText"
          href="https://blj-becky-recommends.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Becky <br /> Recommends
        </a>
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

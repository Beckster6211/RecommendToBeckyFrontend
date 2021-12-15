import React from "react";
// import Auth0 from "../Auth0/auth0";
import "./home.css";

import EatDescription from "./Eat/eat";
import VisitDescription from "./Visit/visit";
import StayDescription from "./Stay/stay";
import ReadDescription from "./Read/read";
import TeleDescription from "./Tele/tele";
import FilmDescription from "./Film/film";

function Home() {
  return (
    <div className="homePage">
      <p className="homeDescriptionWhy">
        🧰 I made this as I wanted to practice all the different aspects taught
        on School of Code 🔧 in particular backend and database work ⚙️ (which
        really confused me whilst learning it 🤪) combining that with frontend
        work of React and connecting the two sides together 🤝 getting them to
        make friends 🧑‍🤝‍🧑
      </p>
      <p className="homeDescriptionHow">
        There is a little description about each of the pages if you need help
        as how to navigate and use them 👍
      </p>
      <EatDescription />
      <br />
      <VisitDescription />
      <br />
      <StayDescription />
      <br />
      <ReadDescription />
      <br />
      <TeleDescription />
      <br />
      <FilmDescription />
      <br />
    </div>
  );
}

export default Home;

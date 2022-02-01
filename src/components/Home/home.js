import React from "react";
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
      <div className="descriptions">
        <div className="des">
          <EatDescription />
        </div>
        {/* <br /> */}
        <div className="des">
          <VisitDescription />
        </div>
        {/* <br /> */}
        <div className="des">
          <StayDescription />
        </div>
        {/* <br /> */}
        <div className="des">
          <ReadDescription />
        </div>
        {/* <br /> */}
        <div className="des">
          <TeleDescription />
        </div>
        {/* <br /> */}
        <div className="des">
          <FilmDescription />
        </div>
        {/* <br /> */}
      </div>
      <p className="homeDescriptionWhy">
        There is a partner to this site called <br />{" "}
        <strong>Becky Recommends</strong> <br />
        👇 which you can get to <small>(In a new tab)</small> by clicking the
        footer at the bottom 👇
      </p>
      <p className="homeDescriptionHow">
        It is a near copy of this site but with what I recommend to others in
        the different catagories. <strong>Becky Recommends</strong> can help you
        with your recommendations or you can just enjoy what I recommend 😃
      </p>
    </div>
  );
}

export default Home;

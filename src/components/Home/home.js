import React from "react";
// import Auth0 from "../Auth0/auth0";
import "./home.css";

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

      <details>
        <summary className="homeEatTitle">Eat 🍴</summary>
        <p className="homeEatDescription">
          {" "}
          I'm getting better at being more adventurous with food, I quite like
          clashing things - lemon meringue{" "}
          <small>
            (It's kinda sour and sweet, its soft and crunchy LOVE IT ❤️)
          </small>
          , chilli and chocolate, ice cream on pancakes etc
          <br />
          <b>
            <small>
              {" "}
              Conversation from a lot of my childhood- <br />
              <q>
                I don't like it. Have you tried it? No. How do you know you
                don't like it? I just don't.
              </q>
            </small>
          </b>
          <br />
          On the food page there is a little chart of my likes ✔️ and dislikes
          ❌ although don't feel as though you have to keep within those. Maybe
          your thinking 🤔
          <br />
          <b>
            <small>
              <q>
                Becky has got to try this but her dislikes list coconut however
                you can barely taste it...
              </q>
            </small>
          </b>{" "}
          can't hurt to list it 🤷
          <br /> In the Where/Recipe form section you could put a
          shop/restaurant/url/recipe{" "}
          <small>
            Secret family recipe for a dish 🤫 you don't want share here 😉 you
            can put your contact linkedin or email (or something) 🤫
          </small>
        </p>
      </details>
      {/* <h3>Home</h3> */}
      {/* <Auth0 /> */}
      {/* <p className="foodPageParagraph">
        I'm getting better at being more adventurous with food <br />
        <b>
          <small>
            {" "}
            Conversation from a lot of my childhood- <br />
            <q>
              I don't like it. Have you tried it? No. How do you know you don't
              like it? I just don't.
            </q>
          </small>
        </b>
        <br /> although I'm not a fan of spicy food 🥵
      </p> */}
    </div>
  );
}

export default Home;

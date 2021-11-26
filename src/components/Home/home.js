import React from "react";
// import Auth0 from "../Auth0/auth0";

function Home() {
  return (
    <div>
      <h3>Home</h3>
      {/* <Auth0 /> */}
      <p className="foodPageParagraph">
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
      </p>
    </div>
  );
}

export default Home;

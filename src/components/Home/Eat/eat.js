import React from "react";

import "./eat.css";

function EatDescription() {
  return (
    <details>
      <summary className="eatTitle">🍴 Eat 🍴</summary>
      <p className="eatDescription">
        I'm getting better at being more adventurous with food, I like clashing
        things{" "}
        <small>
          {" "}
          e.g. lemon meringue (It's kinda sour and sweet, its soft and crunchy
          LOVE IT ❤️) , chilli and chocolate, ice cream on pancakes etc
        </small>
        <br />
        <b>
          <small>
            Conversation from a lot of my childhood- <br />
            <q>
              I don't like it. Have you tried it? No. How do you know you don't
              like it? I just don't.
            </q>
          </small>
        </b>
        <br />
        On the food page there is a chart of my likes✔️ and dislikes❌ although
        don't feel as though you have to keep within those. Maybe you're
        thinking 🤔
        <br />
        <b>
          <small>
            <q>
              Becky has got to try this dish but her dislikes list coconut
              however you can barely taste it...
            </q>
          </small>
        </b>
        can't hurt to list it 🤷
        <br />
      </p>
      <p className="eatDescription">
        In Food input section it could be a whole meal for me to try{" "}
        <small>e.g sushi</small> or an ingredient <small>e.g avocado </small> or
        more of a single dish <small>e.g Sloppy Joes.</small>
        <br />
        In Where/Recipe input section you could put a shop or restaurant, a url
        or your own recipe👩‍🍳{" "}
        <small>
          Secret family recipe for a dish 🤐 you don't want share here 😉 you
          can put your contact linkedin or email (or something) 🤫
        </small>
        <br />
        In Recommended By input section could put your name/nickname, an email,
        linkedIn
        <small>
          {" "}
          I may like to contact you about your recommendation. You could also
          put where you are from, I might know you from somewhere.
        </small>
      </p>
    </details>
  );
}

export default EatDescription;

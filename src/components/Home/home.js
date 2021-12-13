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
        <summary className="homeEatTitle">🍴 Eat 🍴</summary>
        <p className="homeEatDescription">
          I'm getting better at being more adventurous with food, I like
          clashing things{" "}
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
                I don't like it. Have you tried it? No. How do you know you
                don't like it? I just don't.
              </q>
            </small>
          </b>
          <br />
          On the food page there is a chart of my likes✔️ and dislikes❌
          although don't feel as though you have to keep within those. Maybe
          you're thinking 🤔
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
        <p className="homeEatDescription">
          In Food input section it could be a whole meal for me to try{" "}
          <small>e.g sushi</small> or an ingredient <small>e.g avocado </small>{" "}
          or more of a single dish <small>e.g Sloppy Joes.</small>
          <br />
          In Where/Recipe input section you could put a shop or restaurant, a
          url or your own recipe👩‍🍳{" "}
          <small>
            Secret family recipe for a dish 🤐 you don't want share here 😉 you
            can put your contact linkedin or email (or something) 🤫
          </small>
          <br />
          In Recommended By input section could put your name/nickname, an
          email, linkedIn
          <small>
            {" "}
            I may like to contact you about your recommendation. You could also
            put where you are from, I might know you from somewhere.
          </small>
        </p>
      </details>
      <br />
      <details>
        <summary className="homeVisitTitle">👀 Visit 👀</summary>
        <p className="homeVisitDescription">
          I would like to see and do more, check some boxes in life experiences.
          Bucket list kind of things.
        </p>
        <p className="homeVisitDescription">
          The idea behind Visit is
          <br />
          <strong>
            <q>This is so worth seeing</q>
          </strong>{" "}
          or{" "}
          <strong>
            <q>You have to try doing this</q>
          </strong>
          <br />
        </p>
        <p className="homeVisitDescription">
          On the visit page there is a chart of okay✔️ and careful❌ although
          don't feel as though you have to keep within those. Maybe you're
          thinking 🤔
          <br />
          <b>
            <small>
              <q>
                I wondering if Becky has ever run a marathon, would that be a
                welcome activity.
              </q>
            </small>
          </b>
          (I am trying to be healthier) or
          <br />
          <strong>
            <small>
              <q>
                I skydive a lot I can recommend something to tick that off your
                list Becky
              </q>
            </small>
          </strong>
        </p>
        <p className="homeVisitDescription">
          In What input section it could be a building{" "}
          <small>e.g Twickenham Stadium</small> or an activity{" "}
          <small>e.g skydiving </small> or more of an area{" "}
          <small>e.g Loch Ness.</small>
          <br />
          In Location input section you could put a full address or general
          location, country or city.
          <br />
          In Why input section could put why, what is there to see or why do the
          activity, or why go to the area.
          <br />
          In Recommended By input section could put your name/nickname, an
          email, linkedIn
          <small>
            {" "}
            I may like to contact you about your recommendation. You could also
            put where you are from, I might know you from somewhere.
          </small>
        </p>
      </details>
      <br />
      <details>
        <summary className="homeStayTitle">✈️ Stay ✈️</summary>
        <p className="homeStayDescription">
          I would like get more miles under my belt (stamps in my new passport{" "}
          <small>if thats still a thing</small>). This page is set up in a
          simular way to the Visit page but if it helps think of Visit as city
          and Stay as country.
        </p>
        <p className="homeStayDescription">
          The idea behind Stay is
          <br />
          <strong>
            <q>I can't narrow this place down, all/any of it</q>
          </strong>{" "}
          or{" "}
          <strong>
            <q>This is a whole holiday.</q>
          </strong>
          <br />
        </p>
        <p className="homeStayDescription">
          On the Stay page there is a chart of okay✔️ and careful❌ although
          don't feel as though you have to keep within those. Maybe you're
          thinking 🤔
          <br />
          <b>
            <small>
              <q>I went on holiday here it's a hidden gem</q>
            </small>
          </b>
        </p>
        <p className="homeStayDescription">
          In What input section you could add a country{" "}
          <small>e.g Canada</small> or a city <small>e.g California</small>
          <br />
          In Where input section you could put a full address or general
          location, country or city connected with the What.
          <br />
          In Details input section could put why, what is there to see or why go
          to the area.
          <br />
          In Recommended By input section could put your name/nickname, an
          email, linkedIn
          <small>
            {" "}
            I may like to contact you about your recommendation. You could also
            put where you are from, I might know you from somewhere.
          </small>
        </p>
      </details>
      <br />
      <details>
        <summary className="homeReadTitle">📚 Read 📚</summary>
        <p className="homeReadDescription">
          I would like to read more, I don't have anything against reading but
          sometimes it takes me a while to get into a book so it has to grab me
          from the start{" "}
        </p>
        <p className="homeReadDescription">
          <strong>
            <q>This is such as good read. Couldn't put it down.</q>
          </strong>{" "}
          or{" "}
          <strong>
            <q>
              This book(s) goes with this film/tv series and both are great.
            </q>
          </strong>
          <br />
        </p>
        <p className="homeReadDescription">
          On the Read page there is a chart of Yes✔️ and No❌ although don't
          feel as though you have to keep within those. Maybe you're thinking 🤔
          <br />
          <b>
            <small>
              <q>
                This book is pretty thick but don't let that put you off, stay
                with it... Ending comes out of nowhere <small>Spoilers</small>.
              </q>
            </small>
          </b>
        </p>
        <p className="homeReadDescription">
          In Book input section you could add the general book title{" "}
          <small>(if there are a lot)</small>
          <small>e.g Harry Potter</small> or specific book title{" "}
          <small>
            e.g What you see is what you get - Lord Sugar autobiography
          </small>
          <br />
          In Author input section the author/writer of the book(s)
          <br />
          In Number of Books input section put the number of books that are in
          the collection{" "}
          <small>
            (if just 1 then 1, the number appears in brackets for me)
          </small>
          .
          <br />
          In Genre input section put what kind of book it is could be as simple
          fiction/non-fiction or be more specific fantasy/crime/autobiography{" "}
          <strong>
            <small>
              currently there is no genre column on the table but there is in
              the database, so if you could please put something for when I do
              add it (even if it's just fiction or non-fiction).
            </small>
          </strong>
          <br />
          In Connected With input section detail if it's connected with
          something like a TV series, a show, film(s) or another book collection{" "}
          <small>
            such as Lord Alan Sugar autobiography has connection with the TV
            show The Apprentice (UK)
          </small>
          <br />
          In Description input section could add a Googled description of the
          read, the description from the book itself or even go maverick and add
          your own.{" "}
          <strong>
            <small>
              <q>
                I have the perfect way to descript this read, how to make it
                tantalizing but with no spoilers
              </q>
            </small>
          </strong>
          <br />
          In Recommended By input section could put your name/nickname, an
          email, linkedIn
          <small>
            {" "}
            I may like to contact you about your recommendation. You could also
            put where you are from, I might know you from somewhere.
          </small>
        </p>
      </details>
    </div>
  );
}

export default Home;

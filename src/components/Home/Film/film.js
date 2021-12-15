import React from "react";

import "./film.css";

function FilmDescription() {
  return (
    <details>
      <summary className="filmTitle">🎬 Watch 🎬</summary>
      <p className="filmDescription">
        My favourite kind of films are animated actually{" "}
        <small>(if that doesn't make me sound like a child)</small>. I have a
        pretty varied taste, I like sciencey (Star Trek), factual based (Hacksaw
        Ridge), action (Kingsman)...{" "}
        <small>enough badgering I'll give a try</small>
      </p>

      <p className="filmDescription">
        On the Watch page there is a chart of Yes✔️ and No❌ although don't feel
        as though you have to keep within those. Maybe you're thinking 🤔
        <br />
        <b>
          <small>
            <q>
              This film is a little bit scary, a couple of jump out your seat
              moments but in a great way. You'll enjoy it.
            </q>
          </small>
        </b>
      </p>
      <p className="filmDescription">
        In Film input section add the film title name <br />
        In Provider input section add who makes/broadcasts the film/where to
        find it{" "}
        <small>
          e.g Amazon Prime, Netflix, Disney+, etc useful to know if I have to
          bug a family member...
        </small>
        <br />
        In Genre input section put what kind of film it is could be as simple
        fiction/non-fiction or be more specific fantasy/crime/autobiography{" "}
        <strong>
          <small>
            currently there is no genre column on the table but there is in the
            database, so if you could please put something for when I do add it
            (even if it's just fiction or non-fiction).
          </small>
        </strong>
        <br />
        In Connected With input section detail if it's connected with something
        like a TV series, book(s), or anotherfilm(s){" "}
        <small>
          such as Cruella is connected with 101 Dalmatians films (animated and
          live action) and adapted from Dodie Smith book.
        </small>
        <br />
        In Description input section could add a Googled description of the
        film, the description from the film itself or even go maverick and add
        your own.{" "}
        <strong>
          <small>
            <q>
              I have the perfect way to describe this film, how to make it
              tantalizing but with no spoilers
            </q>
          </small>
        </strong>{" "}
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

export default FilmDescription;

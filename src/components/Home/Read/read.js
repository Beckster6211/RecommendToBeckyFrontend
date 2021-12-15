import React from "react";

import "./read.css";

function ReadDescription() {
  return (
    <details>
      <summary className="readTitle">📚 Read 📚</summary>
      <p className="readDescription">
        I would like to read more, I don't have anything against reading but
        sometimes it takes me a while to get into a book so it has to grab me
        from the start{" "}
      </p>
      <p className="readDescription">
        <strong>
          <q>This is such as good read. Couldn't put it down.</q>
        </strong>{" "}
        or{" "}
        <strong>
          <q>This book(s) goes with this film/tv series and both are great.</q>
        </strong>
        <br />
      </p>
      <p className="readDescription">
        On the Read page there is a chart of Do✔️ and Don't❌ although don't
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
      <p className="readDescription">
        In Book input section you could add the general book title{" "}
        <small>(if there are a lot)</small>
        <small>e.g Harry Potter</small> or specific book title{" "}
        <small>
          e.g What you see is what you get - Lord Sugar autobiography
        </small>
        <br />
        In Author input section the author/writer of the book(s)
        <br />
        In Number of Books input section put the number of books that are in the
        collection{" "}
        <small>(if just 1 then 1, the number appears in brackets for me)</small>
        .
        <br />
        In Genre input section put what kind of book it is could be as simple
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
        like a TV series, a show, film(s) or another book collection{" "}
        <small>
          such as Lord Alan Sugar autobiography has connection with the TV show
          The Apprentice (UK)
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

export default ReadDescription;

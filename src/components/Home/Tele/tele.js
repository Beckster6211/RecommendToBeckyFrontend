import React from "react";

import "./tele.css";

function TeleDescription() {
  return (
    <details>
      <summary className="teleTitle">📺 Binge 📺</summary>
      <p className="teleDescription">
        The kind of television I like are a lot of American shows. I am not
        adverse to shows that have spin off shows themselves, but I have to be
        careful as my slight OCD can mean I am caught in a web (at the moment I
        am in a vicious Arrowverse saga).
      </p>
      <p className="teleDescription">
        <strong>
          <q>
            If you don't like this show after episode 6 season 1 give up, save
            your OCD.
          </q>
        </strong>{" "}
        <small>
          Otherwise I will stay with it to the end (mercy I didn't start
          watching LOST)
        </small>{" "}
        or{" "}
        <strong>
          <q>
            This program shows a whole new light on this event/person, eye
            opening.
          </q>
        </strong>
        <br />
      </p>
      <p className="teleDescription">
        On the Binge page there is a chart of Yes✔️ and No❌ although don't feel
        as though you have to keep within those. Maybe you're thinking 🤔
        <br />
        <b>
          <small>
            <q>
              This show is pretty graphic at the start but don't shy away, stay
              with it... You will be gripped by the first cliff hanger{" "}
              <small>Spoilers</small>.
            </q>
          </small>
        </b>
      </p>
      <p className="teleDescription">
        In TV Show input section add the shows title name <br />
        In Provider input section add who makes/broadcasts the show/where to
        find it{" "}
        <small>
          e.g Channel 4, Amazon Prime, Netflix, Disney+, etc useful to know if I
          have to bug a family member...
        </small>
        <br />
        In Number of Series input section put the number of series that are in
        the collection{" "}
        <small>
          (if the show is still being made then the current number it has, or
          just 1)
        </small>
        .
        <br />
        In Genre input section put what kind of show it is could be as simple
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
        like another TV series, book(s), film(s){" "}
        <small>
          such as Young Sheldon has connection with the TV show Big Bang Theory.
        </small>
        <br />
        In Description input section could add a Googled description of the
        show, the description from the show itself or even go maverick and add
        your own.{" "}
        <strong>
          <small>
            <q>
              I have the perfect way to describe this show, how to make it
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

export default TeleDescription;

import React from "react";

import "./visit.css";

function ReadDescription() {
  return (
    <details>
      <summary className="visitTitle">👀 Visit 👀</summary>
      <p className="visitDescription">
        I would like to see and do more, check some boxes in life experiences.
        Bucket list kind of things.
      </p>
      <p className="visitDescription">
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
      <p className="visitDescription">
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
      <p className="visitDescription">
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

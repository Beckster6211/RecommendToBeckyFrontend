import React from "react";

import "./stay.css";

function StayDescription() {
  return (
    <details>
      <summary className="stayTitle">✈️ Stay ✈️</summary>
      <p className="stayDescription">
        I would like get more miles under my belt (stamps in my new passport{" "}
        <small>if thats still a thing</small>). This page is set up in a simular
        way to the Visit page but if it helps think of Visit as city and Stay as
        country.
      </p>
      <p className="stayDescription">
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
      <p className="stayDescription">
        On the Stay page there is a chart of okay✔️ and careful❌ although don't
        feel as though you have to keep within those. Maybe you're thinking 🤔
        <br />
        <b>
          <small>
            <q>I went on holiday here it's a hidden gem</q>
          </small>
        </b>
      </p>
      <p className="stayDescription">
        In What input section you could add a country <small>e.g Canada</small>{" "}
        or a city <small>e.g California</small>
        <br />
        In Where input section you could put a full address or general location,
        country or city connected with the What.
        <br />
        In Details input section could put why, what is there to see or why go
        to the area.
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

export default StayDescription;

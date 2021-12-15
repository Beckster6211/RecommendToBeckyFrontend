import React, { useState, useEffect } from "react";

import "./film.css";

import FilmTable from "./Table/table";
import FilmForm from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Film() {
  const [film, setFilm] = useState([]);
  console.log({ film });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/film")
      .then((response) => response.json())
      .then((response) => {
        setFilm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updatePage]);

  function handleChange(event) {
    let inputName = event.target.name;
    console.log({ inputName });
    let vl = event.target.value;
    console.log({ vl });
    console.log(`${inputName}: ${vl}`);
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
  }

  async function handleTried(id, object) {
    console.log("checkbox ticked");
    console.log(object);
    console.log(object.watched);
    if (object.watched === true) {
      object.watched = false;
      console.log(object.watched);
    } else if (object.watched === false) {
      object.watched = true;
      console.log(object.watched);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/film/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          film: object.film,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          watched: object.watched,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function handleOpinion(event, id, object) {
    console.log("button clicked");
    console.log({ id });
    console.log({ object });
    console.log(event);
    if (event.target.name === "yes") {
      console.log("yes button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😍";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🥱";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😕";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/film/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          film: object.film,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          watched: object.watched,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function handleSubmit(event) {
    // refreshes form, empties form inputs
    window.location.reload();
    console.log("submit pressed");
    console.log(form);
    event.preventDefault();
    const response = await fetch(
      "https://recommend-to-becky.herokuapp.com/film",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function removeFilm(index, id) {
    setFilm([...film.slice(0, index), ...film.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/film/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ film });
  }

  return (
    <div className="filmPage">
      {/* <h3>Film</h3> */}
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}

      <YesNo />
      <FilmForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <FilmTable
        film={film}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteFilm={removeFilm}
      />
    </div>
  );
}

export default Film;

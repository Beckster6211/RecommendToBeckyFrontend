import React, { useState, useEffect } from "react";

import "./tele.css";

import TeleTable from "./Table/table";
import TeleForm from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Tele() {
  const [tele, setTele] = useState([]);
  console.log({ tele });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/tele")
      .then((response) => response.json())
      .then((response) => {
        setTele(response.data);
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
    console.log(object.binged);
    if (object.binged === true) {
      object.binged = false;
      console.log(object.binged);
    } else if (object.binged === false) {
      object.binged = true;
      console.log(object.binged);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tvShow: object.tvshow,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          numberOfSeries: object.numberofseries,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          binged: object.binged,
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
      object.beckyopinion = "🤩";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😩";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🤔";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tvShow: object.tvshow,
          provider: object.provider,
          connected: object.connected,
          genre: object.genre,
          numberOfSeries: object.numberofseries,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          binged: object.binged,
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
      "https://recommend-to-becky.herokuapp.com/tele",
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

  async function removeTele(index, id) {
    setTele([...tele.slice(0, index), ...tele.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/tele/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ tele });
  }

  return (
    <div className="telePage">
      {/* <h3>Binge</h3> */}
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <YesNo />
      <TeleForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <TeleTable
        tele={tele}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteTele={removeTele}
      />
    </div>
  );
}

export default Tele;

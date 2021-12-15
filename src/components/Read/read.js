import React, { useState, useEffect } from "react";

import "./read.css";

import ReadTable from "./Table/table";
import ReadForm from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Read() {
  const [read, setRead] = useState([]);
  console.log({ read });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/read")
      .then((response) => response.json())
      .then((response) => {
        setRead(response.data);
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
    console.log(object.read);
    if (object.read === true) {
      object.read = false;
      console.log(object.read);
    } else if (object.read === false) {
      object.read = true;
      console.log(object.read);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/read/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          book: object.book,
          author: object.author,
          connected: object.connected,
          genre: object.genre,
          numberOfBooks: object.numberofbooks,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          read: object.read,
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
      object.beckyopinion = "🤓";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😴";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😶";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/read/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          book: object.book,
          author: object.author,
          connected: object.connected,
          genre: object.genre,
          numberOfBooks: object.numberofbooks,
          description: object.description,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          read: object.read,
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
      "https://recommend-to-becky.herokuapp.com/read",
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

  async function removeRead(index, id) {
    setRead([...read.slice(0, index), ...read.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/read/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ read });
  }

  return (
    <div className="readPage">
      {/* <h3>Read</h3> */}
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <YesNo />
      <ReadForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <ReadTable
        read={read}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteRead={removeRead}
      />
    </div>
  );
}

export default Read;

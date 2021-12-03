import React, { useState, useEffect } from "react";
import ReadTable from "./Table/table";
import ReadForm from "./Form/form";

import "./read.css";

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
    // setFoodName(inputName);
    // console.log({ foodName });
    let vl = event.target.value;
    console.log({ vl });
    console.log(`${inputName}: ${vl}`);
    // setFoodValue(fdvl);
    // console.log({ foodValue });
    // console.log(`${foodValue}`);
    // setNewFood({ foodName: foodValue, isdone: false });
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
    // setForm({ [inputName]: vl, isdone: false, [inputName]: "someone" });
    // console.log({ form });
  }

  async function handleTried(id, object) {
    console.log("checkbox ticked");
    // setIsDone(!boolean);
    console.log(object);
    // console.log(object.isdone);
    // console.log({ ...object });
    if (object.read === true) {
      object.read = false;
      console.log(object.read);
      // console.log((object.isdone = false));
      // return { ...object, isdone: false };
    } else if (object.read === false) {
      object.read = true;
      console.log(object.read);
      // console.log((object.isdone = true));
      // return { ...object, isdone: true };
    }
    // return { ...object };
    // console.log({ isDone });
    // setIsDone(!isDone);
    // console.log({ isDone });
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
          numberofbooks: object.numberofbooks,
          description: object.description,
          recommendedby: object.recommendedby,
          beckyopinion: object.beckyopinion,
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
    // console.log("button clicked");
    console.log({ id });
    // console.log({ object });
    console.log(event);
    if (event.target.name === "yes") {
      console.log("yes button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😃";
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
      `https://recommend-to-becky.herokuapp.com/read/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          book: object.book,
          author: object.author,
          connected: object.connected,
          genre: object.genre,
          numberofbooks: object.numberofbooks,
          description: object.description,
          recommendedby: object.recommendedby,
          beckyopinion: object.beckyopinion,
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
      <h3>Read</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}

      {/*       
      <div className="stayPageLists">
        <ul className="stayDislike">
          <p className="stayListParagraph">❌ Careful ❌</p>
          <li className="stayDislikeItem">
            Travel sick <small>(worse in cars and coaches)</small>
          </li>
          <li className="stayDislikeItem">
            <strong>HATE SPIDERS</strong>
          </li>
          <li className="stayDislikeItem">
            No car or ability to drive <small>(yet...)</small>
          </li>
          <li className="stayDislikeItem">
            Activities welcome{" "}
            <small>
              (but please don't physically kill me, no Everest base camp)
            </small>
          </li>
          <li className="stayDislikeItem">
            Small budget{" "}
            <small>
              (saving to buy Disney...<small>I wish</small>)
            </small>
          </li>
        </ul>
        <ul className="stayLike">
          <p className="stayListParagraph">✔️ Okay ✔️</p>
          <li className="stayLikeItem">
            Travel sick <small>(Not on boats and planes at all)</small>
          </li>
          <li className="stayLikeItem">Have a passport</li>
          <li className="stayLikeItem">
            Open to experiences <small>(always wanted to parachute jump)</small>
          </li>
          <li className="stayLikeItem">
            Don't mind roughing it travel/stay wise<small>(sensibly)</small>
          </li>
        </ul>
      </div> */}
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

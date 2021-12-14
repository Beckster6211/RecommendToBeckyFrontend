import React, { useState, useEffect } from "react";
import TeleTable from "./Table/table";
// import ReadForm from "./Form/form";

import "./tele.css";

function Tele() {
  const [tele, setTele] = useState([]);
  console.log({ tele });
  //   const [form, setForm] = useState({});
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
  /*
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
*/

  async function handleTried(id, object) {
    console.log("checkbox ticked");
    // setIsDone(!boolean);
    console.log(object);
    // console.log(object.isdone);
    // console.log({ ...object });
    if (object.binged === true) {
      object.binged = false;
      console.log(object.binged);
      // console.log((object.isdone = false));
      // return { ...object, isdone: false };
    } else if (object.binged === false) {
      object.binged = true;
      console.log(object.binged);
      // console.log((object.isdone = true));
      // return { ...object, isdone: true };
    }
    // return { ...object };
    // console.log({ isDone });
    // setIsDone(!isDone);
    // console.log({ isDone });
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
    // console.log("button clicked");
    console.log({ id });
    // console.log({ object });
    console.log(event);
    if (event.target.name === "yes") {
      console.log("yes button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "💖";
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

  /*
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
*/

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
      <h3>Binge</h3>
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      {/*
      <div className="readPageLists">
        <ul className="readDislike">
          <p className="readListParagraph">❌ No ❌</p>
          <li className="readDislikeItem">
            Try not to be too indepth
            <small>
              (why I didn't read Harry Potter as a child{" "}
              <small>too thick).</small>
            </small>
          </li>
          <li className="readDislikeItem">Too heavy and I'll drift off </li>
          <li className="readDislikeItem">
            If in a collection, detail all{" "}
            <small>or my OCD will go nuts from disorder</small>
          </li>

        </ul>
        <ul className="readLike">
          <p className="readListParagraph">✔️ Yes ✔️</p>
          <li className="readLikeItem">
            I like fiction and non-fiction
            <small>
              (If it's got some supernatural/magic in, fine with that)
            </small>
          </li>
          <li className="readLikeItem">I enjoy dystopian type novels</li>
          <li className="readLikeItem">
            I like books based/from film or tv{" "}
            <small>I enjoy seeing how portray certain things</small>
          </li>
          <li className="readLikeItem">
            I watch the tv/film before the book{" "}
            <small>I compare the book to the after the watch</small>
          </li>
          <li className="readLikeItem">
            I like mythology <small>Greek, Roman, Norse, Egyptian...</small>
          </li>
        </ul>
      </div>
      */}
      {/* <ReadForm handleChange={handleChange} handleSubmit={handleSubmit} /> */}
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

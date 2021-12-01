import React, { useState, useEffect } from "react";
import VisitTable from "./Table/table";
import VisitForm from "./Form/form";

import "./visit.css";

function Visit() {
  const [visit, setVisit] = useState([]);
  console.log({ visit });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/visit")
      .then((response) => response.json())
      .then((response) => {
        setVisit(response.data);
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
    if (object.visited === true) {
      object.visited = false;
      console.log(object.visited);
      // console.log((object.isdone = false));
      // return { ...object, isdone: false };
    } else if (object.visited === false) {
      object.visited = true;
      console.log(object.visited);
      // console.log((object.isdone = true));
      // return { ...object, isdone: true };
    }
    // return { ...object };
    // console.log({ isDone });
    // setIsDone(!isDone);
    // console.log({ isDone });
    const response = await fetch(`http://localhost:3001/visit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        what: object.what,
        location: object.location,
        why: object.why,
        recommendedby: object.recommendedby,
        beckyopinion: object.beckyopinion,
        visited: object.visited,
      }),
    });
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
    const response = await fetch(`http://localhost:3001/visit/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        what: object.what,
        location: object.location,
        why: object.why,
        recommendedby: object.recommendedby,
        beckyopinion: object.beckyopinion,
        visited: object.visited,
      }),
    });
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
    const response = await fetch("http://localhost:3001/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function removeVisit(index, id) {
    setVisit([...visit.slice(0, index), ...visit.slice(index + 1)]);
    let response = await fetch(`http://localhost:3001/visit/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ visit });
  }

  return (
    <div className="visitPage">
      {/* <h3>Visit</h3> */}
      <div className="visitPageLists">
        <ul className="visitDislike">
          <p className="visitListParagraph">❌ Careful ❌</p>
          <li className="visitDislikeItem">
            Travel sick <small>(worse in cars and coaches)</small>
          </li>
          <li className="visitDislikeItem">
            <strong>HATE SPIDERS</strong>
          </li>
          <li className="visitDislikeItem">
            No car or ability to drive <small>(yet...)</small>
          </li>
          <li className="visitDislikeItem">
            Activities welcome{" "}
            <small>
              (but please don't physically kill me, no Everest base camp)
            </small>
          </li>
          <li className="visitDislikeItem">
            Small budget{" "}
            <small>
              (saving to buy Disney...<small>I wish</small>)
            </small>
          </li>
        </ul>
        <ul className="visitLike">
          <p className="visitListParagraph">✔️ Okay ✔️</p>
          <li className="visitLikeItem">
            Travel sick <small>(Not on boats and planes at all)</small>
          </li>
          <li className="visitLikeItem">Have a passport</li>
          <li className="visitLikeItem">
            Open to experiences <small>(always wanted to parachute jump)</small>
          </li>
          <li className="visitLikeItem">
            Don't mind roughing it travel/stay wise<small>(sensibly)</small>
          </li>
        </ul>
      </div>
      <VisitForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <VisitTable
        visit={visit}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteVisit={removeVisit}
      />
    </div>
  );
}

export default Visit;

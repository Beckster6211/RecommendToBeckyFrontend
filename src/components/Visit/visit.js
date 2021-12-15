import React, { useState, useEffect } from "react";

import "./visit.css";

import VisitTable from "./Table/table";
import VisitForm from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Visit() {
  const [visit, setVisit] = useState([]);
  console.log({ visit });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/visit")
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
    let vl = event.target.value;
    console.log({ vl });
    console.log(`${inputName}: ${vl}`);
    setForm({ ...form, [event.target.id]: event.target.value });
    console.log({ form });
  }

  async function handleTried(id, object) {
    console.log("checkbox ticked");
    console.log(object);
    console.log(object.visited);
    if (object.visited === true) {
      object.visited = false;
      console.log(object.visited);
    } else if (object.visited === false) {
      object.visited = true;
      console.log(object.visited);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/visit/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          what: object.what,
          location: object.location,
          why: object.why,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          visited: object.visited,
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
      object.beckyopinion = "👍";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "👎";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🤙";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/visit/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          what: object.what,
          location: object.location,
          why: object.why,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          visited: object.visited,
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
      "https://recommend-to-becky.herokuapp.com/visit",
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

  async function removeVisit(index, id) {
    setVisit([...visit.slice(0, index), ...visit.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/visit/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ visit });
  }

  return (
    <div className="visitPage">
      {/* <h3>Visit</h3> */}
      {/* <div>
        <details>
          <summary>Visit Video</summary>
          <video></video>
        </details>
      </div> */}
      <YesNo />
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

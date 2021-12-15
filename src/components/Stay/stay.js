import React, { useState, useEffect } from "react";

import "./stay.css";

import StayTable from "./Table/table";
import StayForm from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Stay() {
  const [stay, setStay] = useState([]);
  console.log({ stay });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/stay")
      .then((response) => response.json())
      .then((response) => {
        setStay(response.data);
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
    console.log(object.stayed);
    if (object.stayed === true) {
      object.stayed = false;
      console.log(object.stayed);
    } else if (object.stayed === false) {
      object.stayed = true;
      console.log(object.stayed);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/stay/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          what: object.what,
          location: object.location,
          details: object.details,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          stayed: object.stayed,
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
      object.beckyopinion = "😁";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😫";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "😑";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/stay/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          what: object.what,
          location: object.location,
          details: object.details,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          stayed: object.stayed,
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
      "https://recommend-to-becky.herokuapp.com/stay",
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

  async function removeStay(index, id) {
    setStay([...stay.slice(0, index), ...stay.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/stay/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ stay });
  }

  return (
    <div className="stayPage">
      {/* <h3>Stay</h3> */}
      {/* <div>
        <details>
          <summary>Stay Video</summary>
          <video></video>
        </details>
      </div> */}
      <YesNo />
      <StayForm handleChange={handleChange} handleSubmit={handleSubmit} />
      <StayTable
        stay={stay}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
        deleteStay={removeStay}
      />
    </div>
  );
}

export default Stay;

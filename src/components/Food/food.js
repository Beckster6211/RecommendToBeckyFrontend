import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
import "./food.css";

import FoodTable from "./Table/table";
import Form from "./Form/form";
import YesNo from "./YesNo/yesNo";

function Food() {
  // const { user } = useAuth0();
  // console.log(user);
  const [food, setFood] = useState([]);
  console.log({ food });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  ////// this doesnt allow the page to refresh when changes made
  // useEffect(() => {
  //   async function getFood() {
  //     let response = await fetch("http://localhost:3000/food");
  //     console.log({ response });
  //     let payload = await response.json();
  //     console.log({ payload });
  //     let data = payload.data;
  //     console.log({ data });
  //     setFood(data);
  //     setUpdatePage(!updatePage);
  //   }
  //   getFood();
  // }, []);

  useEffect(() => {
    fetch("https://recommend-to-becky.herokuapp.com/food")
      .then((response) => response.json())
      .then((response) => {
        setFood(response.data);
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
    console.log(object.isdone);
    if (object.isdone === true) {
      object.isdone = false;
      console.log(object.isdone);
      // console.log((object.isdone = false));
    } else if (object.isdone === false) {
      object.isdone = true;
      console.log(object.isdone);
      // console.log((object.isdone = true));
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/food/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          food: object.food,
          recipe: object.recipe,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          isDone: object.isdone,
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
      object.beckyopinion = "😋";
      console.log(object.beckyopinion);
    } else if (event.target.name === "no") {
      console.log("no button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🤮";
      console.log(object.beckyopinion);
    } else if (event.target.name === "alright") {
      console.log("alright button clicked");
      console.log(object.beckyopinion);
      object.beckyopinion = "🤫";
      console.log(object.beckyopinion);
    }
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/food/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          food: object.food,
          recipe: object.recipe,
          recommendedBy: object.recommendedby,
          beckyOpinion: object.beckyopinion,
          isDone: object.isdone,
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
      "https://recommend-to-becky.herokuapp.com/food",
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

  async function removeFood(index, id) {
    setFood([...food.slice(0, index), ...food.slice(index + 1)]);
    let response = await fetch(
      `https://recommend-to-becky.herokuapp.com/food/${id}`,
      {
        method: "DELETE",
      }
    );
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ food });
  }

  return (
    <div className="foodPage">
      {/* <h1>Food</h1> */}
      {/* <div>
        <details>
          <summary>Eat Video</summary>
          <video></video>
        </details>
      </div> */}
      <YesNo />
      <Form
        food={food}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {/* <br /> */}
      {/* <h2>Food Table</h2> */}
      <FoodTable
        food={food}
        deleteFood={removeFood}
        handleTried={handleTried}
        handleOpinion={handleOpinion}
      />
    </div>
  );
}

export default Food;

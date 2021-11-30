import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./food.css";

// // chakra
// import { Box } from "@chakra-ui/react";

import FoodTable from "./Table/table";
import Form from "./Form/form";

///// when was a list
// import List from "./List/list";
// import FoodList from "../../food";
// import Input from "./Input/input";

// console.log({ FoodList });

function Food() {
  const { user } = useAuth0();
  console.log(user);
  const [food, setFood] = useState([]);
  console.log({ food });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);
  // const [foodName, setFoodName] = useState("");
  // const [foodValue, setFoodValue] = useState("");
  // const [newFood, setNewFood] = useState({});
  // const [isDone, setIsDone] = useState(false);

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

  // useEffect(() => {
  //   fetch("http://localhost:3001/food")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setFood(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [updatePage]);

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
    // console.log(object);
    // console.log(object.isdone);
    // console.log({ ...object });
    if (object.isdone === true) {
      object.isdone = false;
      console.log(object.isdone);
      // console.log((object.isdone = false));
      // return { ...object, isdone: false };
    } else if (object.isdone === false) {
      object.isdone = true;
      console.log(object.isdone);
      // console.log((object.isdone = true));
      // return { ...object, isdone: true };
    }
    // return { ...object };
    // console.log({ isDone });
    // setIsDone(!isDone);
    // console.log({ isDone });
    const response = await fetch(
      `https://recommend-to-becky.herokuapp.com/food/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          food: object.food,
          recipe: object.recipe,
          recommendedby: object.recommendedby,
          beckyopinion: object.beckyopinion,
          isdone: object.isdone,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  // async function handleTried(id, object) {
  //   console.log("checkbox ticked");
  //   // setIsDone(!boolean);
  //   // console.log(object);
  //   // console.log(object.isdone);
  //   // console.log({ ...object });
  //   if (object.isdone === true) {
  //     object.isdone = false;
  //     console.log(object.isdone);
  //     // console.log((object.isdone = false));
  //     // return { ...object, isdone: false };
  //   } else if (object.isdone === false) {
  //     object.isdone = true;
  //     console.log(object.isdone);
  //     // console.log((object.isdone = true));
  //     // return { ...object, isdone: true };
  //   }
  //   // return { ...object };
  //   // console.log({ isDone });
  //   // setIsDone(!isDone);
  //   // console.log({ isDone });
  //   const response = await fetch(`http://localhost:3001/food/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       food: object.food,
  //       recipe: object.recipe,
  //       recommendedby: object.recommendedby,
  //       beckyopinion: object.beckyopinion,
  //       isdone: object.isdone,
  //     }),
  //   });
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   setUpdatePage(!updatePage);
  // }

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
      object.beckyopinion = "🤔";
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
          recommendedby: object.recommendedby,
          beckyopinion: object.beckyopinion,
          isdone: object.isdone,
        }),
      }
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  // async function handleOpinion(event, id, object) {
  //   console.log("button clicked");
  //   console.log({ id });
  //   console.log({ object });
  //   console.log(event);
  //   if (event.target.name === "yes") {
  //     console.log("yes button clicked");
  //     console.log(object.beckyopinion);
  //     object.beckyopinion = "😋";
  //     console.log(object.beckyopinion);
  //   } else if (event.target.name === "no") {
  //     console.log("no button clicked");
  //     console.log(object.beckyopinion);
  //     object.beckyopinion = "🤮";
  //     console.log(object.beckyopinion);
  //   } else if (event.target.name === "alright") {
  //     console.log("alright button clicked");
  //     console.log(object.beckyopinion);
  //     object.beckyopinion = "🤔";
  //     console.log(object.beckyopinion);
  //   }
  //   const response = await fetch(`http://localhost:3001/food/${id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       food: object.food,
  //       recipe: object.recipe,
  //       recommendedby: object.recommendedby,
  //       beckyopinion: object.beckyopinion,
  //       isdone: object.isdone,
  //     }),
  //   });
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   setUpdatePage(!updatePage);
  // }

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

  // async function handleSubmit(event) {
  //   // refreshes form, empties form inputs
  //   window.location.reload();
  //   console.log("submit pressed");
  //   console.log(form);
  //   event.preventDefault();
  //   const response = await fetch("http://localhost:3001/food", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  //   setUpdatePage(!updatePage);
  // }

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

  // async function removeFood(index, id) {
  //   setFood([...food.slice(0, index), ...food.slice(index + 1)]);
  //   let response = await fetch(`http://localhost:3001/food/${id}`, {
  //     method: "DELETE",
  //   });
  //   let data = await response.json();
  //   setUpdatePage(!updatePage);
  //   console.log({ data });
  //   console.log({ food });
  // }

  return (
    <div className="foodPage">
      {/* <h1>Food</h1> */}
      {/* <Input addToList={addFood} />
      <List food={food} deleteFood={removeFood} /> */}
      <div className="foodPageLists">
        <ul className="foodDislike">
          <p className="foodListParagraph">❌ Dislikes ❌</p>
          <li className="foodDislikeItem">Peanuts</li>
          <li className="foodDislikeItem">
            Cheese <small>(when overpowering e.g burger)</small>
          </li>
          <li className="foodDislikeItem">
            Chilli <small>(I don't like the beans)</small>
          </li>
          <li className="foodDislikeItem">
            Spicy/Hot <small>(Not a fan)</small>
          </li>
          <li className="foodDislikeItem">Coconut</li>
          <li className="foodDislikeItem">
            Some fish <small>(prawns, tuna...)</small>
          </li>
          <li className="foodDislikeItem">
            Some fruit{" "}
            <small>
              (pineapple <i>shouldn't be near pizza</i>)
            </small>
          </li>
          <li className="foodDislikeItem">
            Marmite{" "}
            <small>
              (<strong>Disgusting</strong>
            </small>
            )
          </li>
          <li className="foodDislikeItem">
            Alcohol (<small>unless you can't really taste it</small>)
          </li>
        </ul>
        <ul className="foodLike">
          <p className="foodListParagraph">✔️ Likes ✔️</p>
          <li className="foodLikeItem">
            Sweet over savory <small>(pancakes over full english)</small>
          </li>
          <li className="foodLikeItem">
            Cheese <small>(on pizza & lasagne)</small>
          </li>
          <li className="foodLikeItem">
            Meat eater <small>(open to alternatives)</small>
          </li>
          <li className="foodLikeItem">
            More medium/mid well{" "}
            <small>
              (I like crispy{" "}
              <strong>
                Not Burnt <i>"CRISPY"</i>
              </strong>
              )
            </small>
          </li>
          <li className="foodLikeItem">
            Some fish <small>(salmon, cod...)</small>
          </li>
        </ul>
      </div>
      {/* <p>hi</p> */}
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

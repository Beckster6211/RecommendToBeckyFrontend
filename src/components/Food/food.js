import React, { useState, useEffect } from "react";

import FoodTable from "./Table/table";
import Form from "./Form/form";

///// when was a list
// import List from "./List/list";
// import FoodList from "../../food";
// import Input from "./Input/input";

// console.log({ FoodList });

function Food() {
  const [food, setFood] = useState([]);
  console.log({ food });
  const [form, setForm] = useState({});
  const [updatePage, setUpdatePage] = useState(false);
  // const [foodName, setFoodName] = useState("");
  // const [foodValue, setFoodValue] = useState("");
  const [newFood, setNewFood] = useState({});
  const [isDone, setIsDone] = useState(false);

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
    fetch("http://localhost:3000/food")
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
    const response = await fetch(`http://localhost:3000/food/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        food: object.food,
        isdone: object.isdone,
        recommendedby: object.recommendedby,
      }),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function handleSubmit(event) {
    console.log("submit pressed");
    console.log(form);
    event.preventDefault();
    const response = await fetch("http://localhost:3000/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUpdatePage(!updatePage);
  }

  async function removeFood(index, id) {
    setFood([...food.slice(0, index), ...food.slice(index + 1)]);
    let response = await fetch(`http://localhost:3000/food/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    setUpdatePage(!updatePage);
    console.log({ data });
    console.log({ food });
  }

  return (
    <div>
      <h1>Food</h1>
      {/* <Input addToList={addFood} />
      <List food={food} deleteFood={removeFood} /> */}
      <FoodTable
        food={food}
        deleteFood={removeFood}
        handleTried={handleTried}
      />
      <Form
        food={food}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Food;

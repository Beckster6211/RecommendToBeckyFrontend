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
  const [foodName, setFoodName] = useState("");
  const [foodValue, setFoodValue] = useState("");
  const [newFood, setNewFood] = useState({});

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
    console.log(inputName);
    // setFoodName(inputName);
    // console.log({ foodName });
    let fdvl = event.target.value;
    console.log(fdvl);
    // setFoodValue(fdvl);
    // console.log({ foodValue });
    // console.log(`${foodValue}`);
    // setNewFood({ foodName: foodValue, isdone: false });
    setForm({ food: fdvl, isdone: false });
    console.log({ form });
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
      <FoodTable food={food} deleteFood={removeFood} />
      <Form
        food={food}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Food;

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

  useEffect(() => {
    async function GetFood() {
      let response = await fetch("http://localhost:3000/food");
      console.log({ response });
      let payload = await response.json();
      console.log({ payload });
      let data = payload.data;
      console.log({ data });
      setFood(data);
    }
    GetFood();
  }, []);

  // function handleChange(event) {
  //   const foodName = event.target.name;
  //   console.log(foodName);
  //   const foodValue = event.target.value;
  //   console.log(foodValue);
  //   let newFood = { [foodName]: foodValue, isDone: false };
  //   console.log({ newFood });
  //   setForm([{ ...form, newFood }]);
  // }

  // async function handleSubmit(event) {
  //   console.log("submit pressed");
  //   console.log(form);
  //   event.preventDefault();
  //   const response = await fetch("http://localhost:3000/food", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });
  //   console.log(response);
  //   const data = await response.json();
  //   console.log(data);
  // }

  async function removeFood(index, id) {
    setFood([...food.slice(0, index), ...food.slice(index + 1)]);
    let response = await fetch(`http://localhost:3000/food/${id}`, {
      method: "DELETE",
    });
    let data = await response.json();
    console.log({ data });
    console.log({ food });
  }

  return (
    <div>
      <h1>Food</h1>
      {/* <Input addToList={addFood} />
      <List food={food} deleteFood={removeFood} /> */}
      <FoodTable food={food} deleteFood={removeFood} />
      {/* <Form
        food={food}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      /> */}
    </div>
  );
}

export default Food;

import React, { useState, useEffect } from "react";

import FoodTable from "./Table/table";

/////
import List from "./List/list";
import FoodList from "../../food";
import Input from "./Input/input";

console.log({ FoodList });

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

  // function GetFood() {
  //   console.log({ FoodList });
  //   setFood(FoodList);
  // }

  // function addFood(item) {
  //   setFood([...food, { food: item }]);

  // }

  function removeFood(index) {
    setFood([...food.slice(0, index), ...food.slice(index + 1)]);
  }

  return (
    <div>
      <h1>Food</h1>
      {/* <Input addToList={addFood} />
      <List food={food} deleteFood={removeFood} /> */}
      <FoodTable food={food} deleteFood={removeFood} />
    </div>
  );
}

export default Food;

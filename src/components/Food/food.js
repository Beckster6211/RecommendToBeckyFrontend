import React, { useState, useEffect } from "react";

import FoodTable from "./Table/table";

function Food() {
  const [food, setFood] = useState([]);
  console.log(food);

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

  return (
    <div>
      <h1>Food</h1>
      <FoodTable food={food} />
    </div>
  );
}

export default Food;

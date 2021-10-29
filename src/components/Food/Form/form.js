import React, { useState } from "react";

function Form({ handleChange, handleSubmit }) {
  const [form, setForm] = useState({});
  //   console.log({ food });
  console.log({ form });

  //   function handleChange(event) {
  //     const foodName = event.target.name;
  //     console.log(foodName);
  //     const foodValue = event.target.value;
  //     console.log(foodValue);
  //     let newFood = { [foodName]: foodValue, isDone: false };
  //     console.log({ newFood });
  //     setForm([{ ...form, newFood }]);

  //   }

  //   async function handleSubmit(event) {
  //     console.log("submit pressed");
  //     console.log(form);
  //     event.preventDefault();
  //     const response = await fetch("http://localhost:3000/food", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(form),
  //     });
  //     console.log(response);
  //   }

  return (
    <div>
      <h3>Form</h3>
      <form
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          Food
          <input
            type="text"
            name="food"
            // value={food}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;

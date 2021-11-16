import React, { useState } from "react";
import "./form.css";

function FoodForm({ handleChange, handleSubmit }) {
  // const [form, setForm] = useState({});
  //   console.log({ food });
  // console.log({ form });

  return (
    <div id="foodForm">
      {/* <h3>Form</h3> */}
      <form
        id="formFoodForm"
        // autocomplete stops drop down of previous entered
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p></p>
        {/* <label>
            Food: &nbsp; */}
        <input
          type="text"
          name="food"
          id="foodInput"
          placeholder="Food..."
          // value={food}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        {/* </label> */}
        {/* <br />
        <label style={{ display: "none" }}>
          Tried: &nbsp;
          <input
            type="checkbox"
            checked="checked"
            name="tried"
            id="tried"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label> */}
        <p></p>
        {/* <label>
          Recommended By: &nbsp; */}
        <input
          type="text"
          name="recommendedBy"
          id="recommendedByInput"
          placeholder="Recommended By..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        {/* </label> */}
        <p></p>
        <button id="foodFormSubmit" type="submit">
          Submit
        </button>
        <p></p>
      </form>
    </div>
  );
}

export default FoodForm;

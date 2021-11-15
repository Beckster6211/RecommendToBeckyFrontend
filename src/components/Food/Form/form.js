import React, { useState } from "react";
// import "./form.css";

function FoodForm({ handleChange, handleSubmit }) {
  // const [form, setForm] = useState({});
  //   console.log({ food });
  // console.log({ form });

  return (
    <div>
      {/* <h3>Form</h3> */}
      <form
        // autocomplete stops drop down of previous entered
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p>
          I'm getting better at being more adventurous with food although I'm
          not a fan of spicy 🥵
        </p>
        <label>
          Food: &nbsp;
          <input
            type="text"
            name="food"
            id="food"
            // value={food}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label>
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
        <br />
        <label>
          Recommended By: &nbsp;
          <input
            type="text"
            name="recommendedBy"
            id="recommendedBy"
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FoodForm;

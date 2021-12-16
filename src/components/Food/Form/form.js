import React from "react";
import "./form.css";

function FoodForm({ handleChange, handleSubmit }) {
  return (
    <div className="foodForm">
      {/* <h3>Form</h3> */}
      <form
        className="formFoodForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="foodFormSpace"></p>
        <input
          className="foodInput"
          type="text"
          name="food"
          id="food"
          placeholder="Food..."
          // value={food}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="foodFormSpace"></p>
        <textarea
          className="whereInput"
          type="text"
          name="where"
          id="recipe"
          placeholder="Where/Recipe(Ingredients)..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="foodFormSpace"></p>
        <input
          className="recommendedByInput"
          type="text"
          name="recommendedBy"
          id="recommendedBy"
          placeholder="Recommended By..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="foodFormSpace"></p>
        <button className="foodFormSubmit" type="submit">
          Submit
        </button>
        <p className="foodFormSpace"></p>
      </form>
    </div>
  );
}

export default FoodForm;

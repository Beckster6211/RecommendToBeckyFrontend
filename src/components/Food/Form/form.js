import React from "react";
import "./form.css";

function FoodForm({ handleChange, handleSubmit }) {
  // const [form, setForm] = useState({});
  //   console.log({ food });
  // console.log({ form });

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
        <p className="formSpace"></p>
        {/* <label>
            Food: &nbsp; */}
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

        {/* </label> */}
        <p className="formSpace"></p>
        {/* <p className="formSpace"></p> */}
        {/* <label>
          Where/Recipe: &nbsp; */}
        <textarea
          className="whereInput"
          type="text"
          name="where"
          id="recipe"
          placeholder="Where/Recipe..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* </label> */}
        {/* <p className="formSpace"></p> */}
        {/* <label>
          Recommended By: &nbsp; */}
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
        <p className="formSpace"></p>
        <button className="foodFormSubmit" type="submit">
          Submit
        </button>
        <p className="formSpace"></p>
      </form>
    </div>
  );
}

export default FoodForm;

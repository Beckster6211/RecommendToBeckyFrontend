import React, { useState } from "react";

function Form({ handleChange, handleSubmit }) {
  const [form, setForm] = useState({});
  //   console.log({ food });
  console.log({ form });

  return (
    <div>
      {/* <h3>Form</h3> */}
      <form
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
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

export default Form;

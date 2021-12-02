import React from "react";
import "./form.css";

function StayForm({ handleChange, handleSubmit }) {
  // const [form, setForm] = useState({});
  //   console.log({ food });
  // console.log({ form });

  return (
    <div className="visitForm">
      {/* <h3>Form</h3> */}
      <form
        className="visitFoodForm"
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
          className="whatInput"
          type="text"
          name="what"
          id="what"
          placeholder="What..."
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
        <p className="formSpace"></p>

        {/* <label>
          Recommended By: &nbsp; */}
        <input
          className="locationInput"
          type="text"
          name="location"
          id="location"
          placeholder="Where..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="formSpace"></p>
        <textarea
          className="whyInput"
          type="text"
          name="details"
          id="details"
          placeholder="Details..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* </label> */}
        {/* <p className="formSpace"></p> */}
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
        {/* <label>
          Where/Recipe: &nbsp; */}

        {/* </label> */}
        <p className="formSpace"></p>
        <button className="visitFormSubmit" type="submit">
          Submit
        </button>
        <p className="formSpace"></p>
      </form>
    </div>
  );
}

export default StayForm;

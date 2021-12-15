import React from "react";

import "./form.css";

function StayForm({ handleChange, handleSubmit }) {
  return (
    <div className="stayForm">
      {/* <h3>Form</h3> */}
      <form
        className="stayForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="stayFormSpace"></p>
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
        <p className="stayFormSpace"></p>
        <input
          className="whereInput"
          type="text"
          name="location"
          id="location"
          placeholder="Where..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="stayFormSpace"></p>
        <textarea
          className="detailsInput"
          type="text"
          name="details"
          id="details"
          placeholder="Details..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* <p className="stayFormSpace"></p> */}
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
        <p className="stayFormSpace"></p>
        <button className="stayFormSubmit" type="submit">
          Submit
        </button>
        <p className="stayFormSpace"></p>
      </form>
    </div>
  );
}

export default StayForm;

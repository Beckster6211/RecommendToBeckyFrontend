import React from "react";

import "./form.css";

function VisitForm({ handleChange, handleSubmit }) {
  return (
    <div className="visitForm">
      {/* <h3>Form</h3> */}
      <form
        className="visitForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="visitFormSpace"></p>
        <input
          className="visitWhatInput"
          type="text"
          name="what"
          id="what"
          placeholder="What..."
          // value={food}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="visitFormSpace"></p>
        <textarea
          className="visitLocationInput"
          type="text"
          name="location"
          id="location"
          placeholder="Location..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="visitFormSpace"></p>
        <input
          className="visitWhyInput"
          type="text"
          name="why"
          id="why"
          placeholder="Why..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="visitFormSpace"></p>
        <input
          className="visitRecommendedByInput"
          type="text"
          name="recommendedBy"
          id="recommendedBy"
          placeholder="Recommended By..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="visitFormSpace"></p>
        <button className="visitFormSubmit" type="submit">
          Submit
        </button>
        <p className="visitFormSpace"></p>
      </form>
    </div>
  );
}

export default VisitForm;

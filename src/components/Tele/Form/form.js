import React from "react";
import "./form.css";

function FilmForm({ handleChange, handleSubmit }) {
  return (
    <div className="teleForm">
      {/* <h3>Form</h3> */}
      <form
        className="teleForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="teleFormSpace"></p>
        <input
          className="tvShowInput"
          type="text"
          name="tvShow"
          id="tvShow"
          placeholder="TV Show..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="teleFormSpace"></p>
        <input
          className="providerInput"
          type="text"
          name="provider"
          id="provider"
          placeholder="Provider..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="teleFormSpace"></p>
        <input
          className="noOfSeriesInput"
          type="number"
          name="numberOfSeries"
          id="numberOfSeries"
          min="1"
          placeholder="Number of Series(currently)..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="teleFormSpace"></p>
        <textarea
          className="genreInput"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre (Fiction, Non-Fiction, Fantasy, Autobiography)..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* <p className="teleFormSpace"></p> */}
        <textarea
          className="connectedInput"
          type="text"
          name="connected"
          id="connected"
          placeholder="Connected With..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* <p className="teleFormSpace"></p> */}
        <textarea
          className="detailsInput"
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* <p className="teleFormSpace"></p> */}
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
        <p className="teleFormSpace"></p>
        <button className="visitFormSubmit" type="submit">
          Submit
        </button>
        <p className="teleFormSpace"></p>
      </form>
    </div>
  );
}

export default FilmForm;

import React from "react";
import "./form.css";

function FilmForm({ handleChange, handleSubmit }) {
  return (
    <div className="filmForm">
      {/* <h3>Form</h3> */}
      <form
        className="filmForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="filmFormSpace"></p>
        <input
          className="filmInput"
          type="text"
          name="film"
          id="film"
          placeholder="Film..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="filmFormSpace"></p>
        <input
          className="filmProviderInput"
          type="text"
          name="provider"
          id="provider"
          placeholder="Provider..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="filmFormSpace"></p>
        <textarea
          className="filmGenreInput"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre (Fiction, Non-Fiction, Fantasy, Autobiography)..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="filmFormSpace"></p>
        <textarea
          className="filmConnectedInput"
          type="text"
          name="connected"
          id="connected"
          placeholder="Connected With..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="filmFormSpace"></p>
        <textarea
          className="filmDetailsInput"
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="filmFormSpace"></p>
        <input
          className="filmRecommendedByInput"
          type="text"
          name="recommendedBy"
          id="recommendedBy"
          placeholder="Recommended By..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="filmFormSpace"></p>
        <button className="filmFormSubmit" type="submit">
          Submit
        </button>
        <p className="filmFormSpace"></p>
      </form>
    </div>
  );
}

export default FilmForm;

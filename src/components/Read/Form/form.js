import React from "react";
import "./form.css";

function ReadForm({ handleChange, handleSubmit }) {
  return (
    <div className="readForm">
      {/* <h3>Form</h3> */}
      <form
        className="readForm"
        // autocomplete stops drop down of previous entered options
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <p className="readFormSpace"></p>
        <input
          className="readBookInput"
          type="text"
          name="book"
          id="book"
          placeholder="Book..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="readFormSpace"></p>
        <input
          className="readAuthorInput"
          type="text"
          name="author"
          id="author"
          placeholder="Author..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="readFormSpace"></p>
        <input
          className="readNoOfBooksInput"
          type="number"
          name="numberOfBooks"
          id="numberOfBooks"
          min="1"
          placeholder="Number of Books..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="readFormSpace"></p>
        <textarea
          className="readGenreInput"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre (Fiction, Non-Fiction, Fantasy, Autobiography)..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="readFormSpace"></p>
        <textarea
          className="readConnectedInput"
          type="text"
          name="connected"
          id="connected"
          placeholder="Connected With..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="readFormSpace"></p>
        <textarea
          className="readDetailsInput"
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="readFormSpace"></p>
        <input
          className="readRecommendedByInput"
          type="text"
          name="recommendedBy"
          id="recommendedBy"
          placeholder="Recommended By..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="readFormSpace"></p>
        <button className="readFormSubmit" type="submit">
          Submit
        </button>
        <p className="readFormSpace"></p>
      </form>
    </div>
  );
}

export default ReadForm;

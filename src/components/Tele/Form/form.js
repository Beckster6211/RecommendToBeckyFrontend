import React from "react";
import "./form.css";

function TeleForm({ handleChange, handleSubmit }) {
  // const [form, setForm] = useState({});
  //   console.log({ food });
  // console.log({ form });

  return (
    <div className="teleForm">
      {/* <h3>Form</h3> */}
      <form
        className="teleFormForm"
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
          name="tvShow"
          id="tvShow"
          placeholder="TV Show..."
          // value={food}
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="formSpace"></p>
        {/* <label>
            Food: &nbsp; */}
        <input
          className="whatInput"
          type="text"
          name="provider"
          id="provider"
          placeholder="Provider (where)..."
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
          type="number"
          name="numberOfSeries"
          id="numberOfSeries"
          min="1"
          placeholder="Number of Series(currently)..."
          onChange={(event) => {
            handleChange(event);
          }}
        />
        <p className="formSpace"></p>
        <textarea
          className="whyInput"
          type="text"
          name="genre"
          id="genre"
          placeholder="Genre (Fiction, Non-Fiction, Fantasy, Autobiography)..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="formSpace"></p>
        <textarea
          className="whyInput"
          type="text"
          name="connected"
          id="connected"
          placeholder="Connected With..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        <p className="formSpace"></p>
        <textarea
          className="whyInput"
          type="text"
          name="description"
          id="description"
          placeholder="Description..."
          onChange={(event) => {
            handleChange(event);
          }}
          rows="2"
        />
        {/* </label> */}
        <p className="formSpace"></p>
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

export default TeleForm;

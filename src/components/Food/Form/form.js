import React, { useState } from "react";
import "./form.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FoodForm({ handleChange, handleSubmit }) {
  const [form, setForm] = useState({});
  //   console.log({ food });
  console.log({ form });

  return (
    <div>
      {/* <h3>Form</h3> */}
      <Form
        id="foodForm"
        autoComplete="off"
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Form.Text id="foodFormText">
          I'm getting better at being more adventurous with food although I'm
          not a fan of spicy 🥵
        </Form.Text>
        <p></p>
        <Form.Floating id="foodFloating">
          <Form.Control
            id="food"
            name="food"
            type="text"
            placeholder="Food"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <label htmlFor="floatingInputCustom" id="foodLabel">
            Food
          </label>
        </Form.Floating>
        <p></p>
        <Form.Floating>
          <Form.Control
            id="recommendedBy"
            name="recommendedBy"
            type="text"
            placeholder="Food"
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <label htmlFor="floatingInputCustom">Recommended By</label>
        </Form.Floating>
        <Button id="submitButton" variant="info" type="submit">
          Submit
        </Button>
        {/* <label>
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
        </label> */}
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
        {/* <br />
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
        <br /> */}
        {/* <button type="submit">Submit</button> */}
      </Form>
    </div>
  );
}

export default FoodForm;

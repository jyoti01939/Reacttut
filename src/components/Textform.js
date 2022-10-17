import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Uppercase was Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1"
          onClick={handleUpClick}
        >
          Change to uppercase
        </button>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1"
          onClick={handleLoClick}
        >
          Change to lowercase
        </button>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-5">
        <h3>Your Text Here</h3>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Mintues to read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";
// import PropTypes from "prop-types";


export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!","danger")
  };

  const handleOnChange = (event) => {
    // console.log("Uppercase was Changed");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark'?'white':'black' }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark'?'#afadad':'white' , color:props.mode === 'dark'?'white':'black'}}
          ></textarea>
        </div>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1 my-1"
          onClick={handleUpClick}
          disabled={text.length===0}
        >
          Change to uppercase
        </button>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1 my-1"
          onClick={handleLoClick}
          disabled={text.length===0}
        >
          Change to lowercase
        </button>
        <button
          className="btn btn-primary btn-sm rounded-pill mx-1 my-1"
          onClick={handleClearClick}
          disabled={text.length===0}
        >
          Clear Text
        </button>
      </div>

      <div className="container my-5" style={{ color: props.mode === 'dark'?'white':'black' }}>
        <h3>Your Text Here</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Mintues to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something to preview it here'}</p>
      </div>
    </>
  );
}

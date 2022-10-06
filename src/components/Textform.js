import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event)=>{
        // console.log("Uppercase was Changed");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
  return (
    <div>
        <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className="btn btn-primary btn-sm rounded-pill" onClick={handleUpClick}>Change to uppercase</button>
    </div>
  )
}

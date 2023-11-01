import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","Success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
  };
  const handleCopy = ()=>{
    let newText = text.copy();
    setText(newText);
  }
  const handleOnSelect = () => {
    let newText = text.select();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter the text here");

  return (
    <>
      <form>
        <div className="form-group">
          <h1 style={{
          color: props.mode === "dark" ? "black" : "white",
        }}>{props.heading} </h1>
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "white" : "#333333",
              color: props.mode === "dark" ? "black" : "white",
            }}
          ></textarea >
        </div>
      </form>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} >
        Convert to UpperCase
      </button>
      <button className="btn btn-primary" onClick={handleLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <div className="container" onChange={handleOnSelect} style={{
          color: props.mode === "dark" ? "black" : "white",
        }} >
        <h2>Text Summary</h2>
        <p>
          {text.trim().split(/\s+/).filter(Boolean).length} Words and{" "}
          {text.length} Characters
        </p>
        <p>{text.split(".").length} Sentences</p>

        <h2>Text Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
TextForm.defaultProps = {
  heading: "TEXT AREA",
};

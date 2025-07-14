import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text)
    // console.log("Uppercase was clicked" + text)
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
    setText(event.target.value);
  };
  const handleCapitalizeWords = () => {
    const capitalized = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(capitalized);
  };
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    
  }

  const [text, setText] = useState("");
  return (
    <>
  
      <div className="container" style={{color: props.mode === 'light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control "
            value={text}
            onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'#042743',color: props.mode === 'light'?'black':'white'}}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeWords}
        >
          Capitalize Words
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
        
          Copy text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleExtraSpace}
        >
      
          Remove extra space
        </button>

        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}} >
        <h2>Your text summary</h2>
        <p>
          <strong> {text.split(" ").length}</strong> Words and{" "}
          <strong> {text.length}</strong> Characters
        </p>
        <p>
          <strong>{0.008 * text.split(" ").length} </strong>Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text : "Enter somthing in the textbox above to preview it"}</p>
      </div>
      
    </>
  );
}

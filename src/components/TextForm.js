import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log(text)
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("Text converted to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("Text converted to lowercase","success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
     props.alert("Text has been cleared","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCapitalizeWords = () => {
    const capitalized = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(capitalized);
     props.alert("Text fisrt letters converted to uppercase","success")
  };
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    document.getSelection().removeAllRanges();
     props.alert("Text has been copied on clipbord","success")
  }
  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
     props.alert("Extra space has been deleted","success")
    
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
        <div className="container">
          <div className="row">
             <div className="col-6 col-md-2 mb-2">


        <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        </div>
        <div className="col-6 col-md-2 mb-2">

        <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        </div>
           <div className="col-6 col-md-2 mb-2">

        <button disabled ={text.length===0}
          className="btn btn-primary mx-1"
          onClick={handleCapitalizeWords}
        >
          Capitalize Words
        </button>
        </div>
    <div className="col-6 col-md-2 mb-2">

        <button disabled ={text.length===0}
          className="btn btn-primary mx-1"
          onClick={handleCopy}
        >
        
          Copy text
        </button>
        </div>
        <div className="col-6 col-md-2 mb-2">

        <button disabled ={text.length===0}
          className="btn btn-primary mx-1"
          onClick={handleExtraSpace}
        >
      
          Remove extra space
        </button>
        </div>
        <div className="col-6 col-md-2 mb-2">

        <button disabled ={text.length===0} className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
         </div>
       </div>
       </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}} >
        <h2>Your text summary</h2>
        <p>
          <strong> {text?text.trim().split(/\s+/).length:0}</strong> Words and{" "}
          <strong> {text.length}</strong> Characters
        </p>
        <p>
          <strong>{(0.008 * (text?text.trim().split(/\s+/).length:0)).toFixed(2)} </strong>Minutes to read
        </p>
        <h3>Preview</h3>
        <p>{text.length>0?text : "Nothing to preview!"}</p>
      </div>
      
    </>
  );
}

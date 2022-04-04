import React, { useState } from "react";

export default function Textform(props) {
const handleUpClick = () => {
    console.log("Uppercase was clicked");

    setText("you have clicked on handleUpClick" + text);
    let newText = text.toUpperCase();
    setText(newText);
};

const handleLoClick = () => {
    console.log("Uppercase was clicked");

    setText("you have clicked on handleUpClick" + text);
    let newText = text.toLowerCase();
    setText(newText);
};

const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
};

const handleCopy = () =>{
    var text = document.getElementById("mybox");
    console.log("I am happy");
    text.select();
    navigator.clipboard.writeText(text.value);
}

const handleClearClick = () => {
    setText(' ')
}

const [text, setText] = useState(" ");
// text = "new-text"; //wrong way to change the state
// setText = ("new-text"); //wrong way to change the state

return (
    <>
        <div className="contaner" style = {{backgroundColor:props.mode==='dark'?'white':'#042743', color:props.mode==='dark'?'#042743':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="mybox" className="form-label">
                    Example textarea
                </label> */}
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#80808038':'#042743', color:props.mode==='dark'?'#042743':'white'}}
                    id="mybox"
                    rows="8">
                </textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Covert to UpperCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                Covert to LowerCase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>
                Copy text
            </button>
        </div>
        <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'white':'#042743', color:props.mode==='dark'?'#042743':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
            <p>{0.08*text.split(" ").length} Read minute</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter the something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}

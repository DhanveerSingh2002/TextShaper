import React, { useState } from 'react'
import "../App.css"

const Textform = (props) => {

  const[text, setText]=useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [wordCount, setWordCount] = useState(0);


  const HandleChange = (event) => {
    setText(event.target.value);
    updateWordCount(event.target.value);
  }

  const HandleUC = () => {
    setText(text.toUpperCase());
    props.showAlert("Success : Converted to Uppercase.")
  }

  const HandleLC = () => {
    setText(text.toLowerCase());
    props.showAlert("Success : Converted to Lowercase.")
  }

  const HandleBold = () => {
    setIsBold(!isBold);
    if(isBold===true)
    {
      props.showAlert("Success : Text Unbolded");
    }
    else
    {
      props.showAlert("Success : Text Bolded");
    }
  };

  const HandleItalic = () => {
    setIsItalic(!isItalic);
    if(isItalic===true)
    {
      props.showAlert("Success : Text Unitalicized");
    }
    else
    {
      props.showAlert("Success : Text Italicized");
    }
  };

  const HandleClear = () => {
    setText("");
    setWordCount(0);
    props.showAlert("Success : Text Cleared.")
  };

  const HandleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Success : Speaking... ")
  }

  const HandleCopy = () => {
    var cText = document.getElementById("textbox");
    cText.select();
    navigator.clipboard.writeText(cText.value);
    props.showAlert("Success : Text Copied.")
  }

  const updateWordCount = (newText) => {
    const count = newText.trim() === '' ? 0 : newText.split(" ").filter(word => word !== '').length;
    setWordCount(count);
  };


  return (
    <>
    <div className="mt-12">
        <h3 className='center text-2xl italic'>Enter your text here: </h3>
        <textarea 
                  id="textbox"
                  className=" TA center mt-2 text-xl" 
                  value={text} onChange={HandleChange} 
                  cols="200"  
                  rows="10" 
                  placeholder='Type Here...' 
                  style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }}>
        </textarea>
        <br/>
    </div>
    <div className="container flex btn-cont">
      <button title="Capital Alphabets" className="BTN UC" onClick={HandleUC}>Convert to Uppercase</button>
      <button title="Small Alphabets" className="BTN LC" onClick={HandleLC}>Convert to Lowercase</button>
      <button title="Bold" className="BTN bold" onClick={HandleBold}>{isBold ? 'Unbold Text' : 'Bold Text' }</button>
      <button title="Italics" className="BTN Italic" onClick={HandleItalic}>{isItalic ? 'Remove Italics' : 'Italicize Text'}</button>
      <button title="Clear the Textbox" className="BTN UC" onClick={HandleClear}>Clear Text</button>
      <button title="Copy Text" className="BTN LC" onClick={HandleCopy}>&#128203;</button>
      <button title="Speak Text" className="BTN LC" onClick={HandleSpeak}>&#127908;</button>
    </div>
    <div>
      <h3 className='center text-2xl italic my-6'>Total words: </h3>
      <p className='center words text-xl'>{wordCount}</p>
    </div>
    </>
  )
}

export default Textform

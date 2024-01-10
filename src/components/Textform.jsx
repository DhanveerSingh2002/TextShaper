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

    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      props.showAlert("Success : Converted to Uppercase.")
    }
  }

  const HandleLC = () => {
    setText(text.toLowerCase());
    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      props.showAlert("Success : Converted to lowercase.")
    }
  }

  const HandleBold = () => {
    setIsBold(!isBold);
    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      if(isBold===true)
      {
        props.showAlert("Success : Text Unbolded");
      }
      else
      {
        props.showAlert("Success : Text Bolded");
      }
    }
  };

  const HandleItalic = () => {
    setIsItalic(!isItalic);
    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      if(isItalic===true)
      {
        props.showAlert("Success : Text Italicized");
      }
      else
      {
        props.showAlert("Success : Text Unitalicizeded");
      }
    }
  };

  const HandleClear = () => {
    setText("");
    setWordCount(0);
    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      props.showAlert("Success : Text Cleared")
    }
  };

  const HandleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    if(text==="")
    {
      props.showAlert("Failure : Please add some text.", "red")
    }
    else
    {
      props.showAlert("Success : Speaking...")
    }
  }

  const HandleCopy = () => {
    var cText = document.getElementById("textbox");
    cText.select();

    if (text === "") {
        props.showAlert("Failure: Please add some text.", "red");
    } else {
        try {
            if (document.execCommand("copy")) {
                props.showAlert("Success: Text Copied");
            } else {
                throw new Error("Copy command not supported");
            }
        } catch (err) {
            console.error("Unable to copy text", err);
            props.showAlert("Failure: Unable to copy text. Please try again.");
        }
    }
};

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
      <button title="Clear the Textbox" className="BTN Clear" onClick={HandleClear}>Clear Text</button>
      <button title="Copy Text" className="BTN Copy" onClick={HandleCopy}>&#128203;</button>
      <button title="Speak Text" className="BTN Speak" onClick={HandleSpeak}>&#127908;</button>
    </div>
    <div>
      <h3 className='center text-2xl italic my-6'>Total words: </h3>
      <p className='center words text-xl'>{wordCount}</p>
    </div>
    </>
  )
}

export default Textform

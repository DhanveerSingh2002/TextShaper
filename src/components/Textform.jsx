import React, { useState } from 'react'
import "../App.css"

const Textform = () => {

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
  }

  const HandleLC = () => {
    setText(text.toLowerCase());
  }

  const HandleBold = () => {
    setIsBold(!isBold);
  };

  const HandleItalic = () => {
    setIsItalic(!isItalic);
  };

  const HandleClear = () => {
    setText("");
    setWordCount(0);
  };

  const HandleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const updateWordCount = (newText) => {
    const count = newText.trim() === '' ? 0 : newText.split(" ").filter(word => word !== '').length;
    setWordCount(count);
  };


  return (
    <>
    <div class="mt-6">
        <h3 className='center text-2xl italic '>Enter your text here: </h3>
        <textarea 
                  className=" TA center mt-2 text-xl" 
                  value={text} onChange={HandleChange} 
                  cols="200"  
                  rows="10" 
                  placeholder='Click Here...' 
                  style={{ fontWeight: isBold ? 'bold' : 'normal', fontStyle: isItalic ? 'italic' : 'normal' }}>
        </textarea>
        <br/>
    </div>
    <div>
      <button className="btn btn-primary UC" onClick={HandleUC}>Convert to Uppercase</button>
      <button className="btn btn-primary LC" onClick={HandleLC}>Convert to Lowercase</button>
      <button className="btn btn-primary bold" onClick={HandleBold}>{isBold ? 'Unbold Text' : 'Bold Text' }</button>
      <button className="btn btn-primary Italic" onClick={HandleItalic}>{isItalic ? 'Remove Italics' : 'Italicize Text'}</button>
      <button className="btn btn-primary LC" onClick={HandleClear}>Clear Text</button>
      <button className="btn btn-primary LC" onClick={HandleSpeak}>Speak</button>
    </div>
    <div>
      <h3 className='center text-2xl italic my-6'>Total words: </h3>
      <p className='center words text-xl'>{wordCount}</p>
    </div>
    </>
  )
}

export default Textform

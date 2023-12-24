import React from 'react'
import "../App.css"

const Textform = () => {
  return (
    <>
    <div class="mt-6">
        <h3 className='center text-2xl italic '>Enter your text here: </h3>
        <textarea className=" TA center mt-2 text-xl" name="" id="" cols="200" rows="10" placeholder='Click Here...'></textarea>
        <br/>
    </div>
    <button className="btn btn-primary UC" >Convert to Uppercase</button>
    <button className="btn btn-primary LC" >Convert to Lowercase</button>
    <button className="btn btn-primary bold" >Bold Text</button>
    <button className="btn btn-primary Italic" >Italic Text</button>
    </>
  )
}

export default Textform

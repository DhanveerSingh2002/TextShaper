import React from 'react'

const About = () => {
  return (
    <>
    <div className="container">
      <p className='me my-6 text-3xl text-purple-300 italic'>About the developer</p>
    </div>
    <div className="container container-1 flex size-10/12 justify-between">
        <div className='item item-1 text-3xl'>
        Hi, I am <span className="text-purple-300 italic">Dhanveer Singh</span>, a Student at <span className="text-purple-500 italic">Guru Nanak Dev University, Amritsar</span>. I am studying <span className="text-purple-300 italic">Computer Science</span> and aspire to be a successful <span className="text-purple-500 italic">Web Developer</span>. This is my first solo project. It is a website where you can <span className="text-purple-300 italic">"play with your text"</span> like make it bold, convert it to italics and many more things. Even though this website is at a starting stage, I would continue to keep updating <span className="text-purple-500 italic">more and useful functionlities.</span>
        </div>
        <div className='item item-2'><img src={require('./image.jpg')} alt="Description"></img></div>
        <div className='item item-2'>item-3</div>
        <div className='item item-3'>item-4</div>
    </div>
    </>
  )
}

export default About

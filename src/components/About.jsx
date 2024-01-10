import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <>
    <div>
      <p className='me my-6 text-3xl text-purple-900 italic'>About the developer</p>
    </div>
    <div className="container container-1 flex size-10/12 justify-between">
        <div className='item item-1 text-3xl'>
        Hi, I am <span className="text-purple-900 italic">Dhanveer Singh</span>, a Student at <span className="text-purple-700 italic">Guru Nanak Dev University, Amritsar</span>. I am studying <span className="text-purple-900 italic">Computer Science</span> and aspire to be a successful <span className="text-purple-700 italic">Web Developer</span>. This is my first solo project. It is a website where you can <span className="text-purple-900 italic">"play with your text"</span> like make it bold, convert it to italics and many more things. Even though this website is at a starting stage, I would continue to keep adding <span className="text-purple-700 italic">more and useful functionlities.</span> Thank you for visiting &#128513;.
        </div>
        <div className='item item-2'><img src={require('./image.jpg')} alt="Description"></img></div>
        <div className='item item-3 text-3xl'>
          <em>Skill set: </em>
          <ul className="mt-4 font-serif skillset">
            <li>Programming in C++</li>
            <li>Data Structures and Algorithms</li>
            <li>Database Management System</li>
            <li>Fullstack Web Development</li>
          </ul>
        </div>
        <div className='item item-4 text-3xl'>
          <em>Social Media: </em>
          <ul className="mt-4 font-serif skillset">
            <li className='links' >
              <a href="https://www.linkedin.com/in/dhanveer-singh-466738229" target='_blank' title="LinkedIn"
              rel='noreferrer'><FontAwesomeIcon className='linkedin linkedinicon' icon={faLinkedin} style={{ marginRight: '8px' }} /></a>
            </li>
            <li className='links' >
              <a href="https://www.instagram.com/dhanveersingh23775/" target='_blank' rel='noreferrer' title='Instagram'><FontAwesomeIcon className='instagram instagramicon' icon={faInstagram} style={{ marginRight: '8px' }} /></a>
            </li>
            <li className='links' >
              <a href="https://github.com/DhanveerSingh2002" target='_blank' rel='noreferrer' title='GitHub'><FontAwesomeIcon className='github githubicon' icon={faGithub} style={{ marginRight: '8px' }} /></a>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default About

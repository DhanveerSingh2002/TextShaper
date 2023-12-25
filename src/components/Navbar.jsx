import React from 'react'
import '../App.css';

const Navbar = () => {
  return (
    <div>
      <>
    <nav className="py-4 px-5 bg-purple-900 navbar">
      <ul className="inline-flex  ull">
        <li className="name font-bold ml-0 mr-4 text-3xl cursor-pointer inline-block italic">Textify</li>
        <li className="home ml-5 mr-4 pt-1  inline-block cursor-pointer text-2xl">Home</li>
        <li className="socials mx-4 pt-1 cursor-pointer inline-block text-2xl">About & Socials</li>
      </ul>
    </nav>
    </>
    </div>
  )
}

export default Navbar

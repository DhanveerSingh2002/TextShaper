import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div>
        <nav className="py-4 px-5 bg-purple-900 navbar">
          <ul className="inline-flex">
            <li className="name nav-items -mt-1 font-bold -ml-8 mr-4 text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer inline-block italic">
              <Link to="/">Text-Shaper</Link>
            </li>
            <li className="home nav-items ddl -mt-1 ml-5 mr-4 pt-1 inline-block cursor-pointer text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:pt-0 sm:ml-2 sm:mr-2 md:pt-0 md:ml-2 md:mr-2 lg:pt-1 lg:ml-4 lg:mr-4 xl:pt-1 xl:ml-6 xl:mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="socials nav-items ddl -mt-1  pt-1  cursor-pointer inline-block text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl sm:pt-0 sm:ml-2 sm:mr-2 md:pt-0 md:ml-2 md:mr-2 lg:pt-1 lg:ml-4 lg:mr-4 xl:pt-1 xl:ml-4 xl:mr-4">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

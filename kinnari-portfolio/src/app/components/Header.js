"use client"

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-700 text-white p-4 sticky top-0 shadow-xl">
      <nav className={`container mx-auto  ${isOpen ? 'block' : 'flex'} justify-between items-center`}>
        <div className={`text-xl font-bold ${isOpen ? 'hidden' : 'block'}`}>Kinnari Tamhane</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none float-right mb-5 mt-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='md:pt-2 pt-10 h-[100vh] md:h-auto md:flex grid place-content-center text-center gap-8'>
            <li><a href="#about" onClick={toggleMenu }className="block px-2 py-1 hover:font-bold text-2xl md:text-lg">About Me</a></li>
            <li><a href="#skills" onClick={toggleMenu} className="block px-2 py-1 hover:font-bold text-2xl md:text-lg">Tech Stack</a></li>
            <li><a href="#education" onClick={toggleMenu} className="block px-2 py-1 hover:font-bold text-2xl md:text-lg">Education</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="block px-2 py-1 hover:font-bold text-2xl md:text-lg">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

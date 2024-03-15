import React from 'react';
import LogoImage from './images/logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-900 p-4 flex justify-between items-center">
      <div className="font-serif text-2xl font-bold leading-10 tracking-normal text-left text-white">Vedas</div>
      <button onClick={toggleMenu} className="block lg:hidden focus:outline-none">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Home</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Astrologers</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Horoscope</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Puja</a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Kundli</a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-white-200 inline-block hover:underline">Compatibility</a>
        </li>
        <img src={LogoImage} alt="Logo" className="w-6 h-6 ml-2 rounded-full" />
      </ul>
    </nav>
  );
};

export default NavBar;


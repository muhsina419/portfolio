import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: "HOME", to: "#home" },
  { label: "WHO AM I?", to: "#about" },
  { label: "THE MAKING OF ME", to: "#education" },
  { label: "WHAT I LEARNED", to: "#skills" },
  { label: "WHAT I BUILT", to: "#projects" },
  { label: "LETS CONNECT", to: "#connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-[100]">
      <div className="home-gradient-bg px-10 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-white shadow-lg">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="irish-grover-regular text-3xl mb-4 md:mb-0">MB.</h1>
          {/* Hamburger menu for small screens */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="just-me-again-down-here-regular hidden md:flex flex-row items-center gap-x-8 ml-0 md:ml-8">
          {navLinks.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer transition-all">
              <a href={item.to} className="px-4 py-2 block">
                {item.label}
              </a>
              <span className="absolute inset-0 rounded-md border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="just-me-again-down-here-regular flex flex-col gap-4 text-white px-10 py-4 md:hidden shadow-lg bg-gradient-to-b from-black/80 to-black/60">
          {navLinks.map((item, idx) => (
            <li
              key={idx}
              className="relative group cursor-pointer transition-all"
              onClick={() => setIsOpen(false)}
            >
              <a href={item.to} className="px-4 py-2 block">
                {item.label}
              </a>
              <span className="absolute inset-0 rounded-md border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 pointer-events-none"></span>
            </li>
          ))}
        </ul>
      )}

      <div className="shadow border-b-2 border-white/30 w-full"></div>
    </nav>
  );
};

export default Navbar;

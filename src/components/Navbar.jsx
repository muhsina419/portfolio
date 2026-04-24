import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: "HOME", to: "#home" },
  { label: "WHO AM I?", to: "#about" },
  { label: "THE MAKING OF ME", to: "#education" },
  { label: "WHAT I LEARNED", to: "#skills" },
  { label: "WHAT I BUILT", to: "#projects" },
  { label: "WINNINGS ALONG THE WAY", to: "#achievements"},
  { label: "LETS CONNECT", to: "#connect" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-[100]">
      <div className="home-gradient-bg bg-opacity-90 backdrop-blur-md px-10 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-white shadow-lg border-b border-white/20">
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
            <li 
              key={idx} 
              className="relative cursor-pointer transition-all"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href={item.to} className="relative z-10 px-4 py-2 block">
                {item.label}
              </a>
              {hoveredIndex === idx && (
                <motion.span 
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-md bg-white/20 border-2 border-white pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="just-me-again-down-here-regular flex flex-col gap-4 text-white px-10 py-4 md:hidden shadow-lg bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-md overflow-hidden border-b border-white/20"
          >
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative group cursor-pointer transition-all"
                onClick={() => setIsOpen(false)}
              >
                <a href={item.to} className="px-4 py-2 block">
                  {item.label}
                </a>
                <span className="absolute inset-0 rounded-md bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

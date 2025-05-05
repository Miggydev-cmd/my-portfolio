import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        <div className="text-2xl font-bold text-purple-400 tracking-wider">My Portfolio</div>

        <nav className="hidden md:flex gap-8">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              {name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-8 space-y-4 flex flex-col items-center">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="text-lg cursor-pointer hover:text-purple-400 transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

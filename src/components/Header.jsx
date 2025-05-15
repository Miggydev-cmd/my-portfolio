import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d1f]/80 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔮 Logo */}
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-text-glow tracking-widest uppercase">
          MiggyDev
        </h1>

        {/* 🖥️ Desktop Nav */}
        <nav className="hidden md:flex space-x-10 text-white text-lg font-medium">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer relative group"
            >
              <span className="hover:text-purple-400 transition">{name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 📱 Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#0c0c1d] text-white py-6 px-6 flex flex-col space-y-4 text-center">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium hover:text-purple-400 transition"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

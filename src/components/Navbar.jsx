import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import navLinks from "../constants/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-slate-900 text-slate-300">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/tbspot_navlogo.webp"
          alt="The Beauty Spot Logo"
          className="h-10 w-auto"
        />
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-slate-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex md:items-center md:space-x-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-base hover:text-amber-600 uppercase tracking-wide font-bold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Links */}
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-slate-900 z-40 flex flex-col items-center justify-center space-y-6
          transition-all duration-300 ease-in-out md:hidden
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-2xl hover:text-amber-600 uppercase tracking-wide font-bold"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-slate-900/50 text-slate-300">
      <div className="flex items-center">
        <img
          src="/tbspot_navlogo.png"
          alt="The Beauty Spot Logo"
          className="h-10 w-auto"
        />
      </div>
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-2 text-slate-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      {/* Navigation Links */}
      <ul
        className={`absolute top-full left-0 right-0 md:static md:flex md:space-x-4 md:p-0 ${
          isOpen ? "block p-4 space-y-4" : "hidden"
        }`}
      >
        {["Home", "About", "Pricing", "Contact"].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-white block uppercase tracking-wide"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

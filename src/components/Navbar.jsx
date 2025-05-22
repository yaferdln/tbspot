import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-slate-900 text-slate-300">
      <div className="flex items-center">
        <img
          src="/tbspot_navlogo.webp"
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
        className={`absolute top-14 left-0 right-0 bg-slate-900/90 md:static md:flex md:space-x-4 md:p-0 transition-all duration-300 ease-in-out ${
          isOpen ? "block p-4 space-y-4 shadow-lg" : "hidden"
        }`}
      >
        {["Home", "About", "Pricing", "Contact"].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-400 block uppercase tracking-wide leading-relaxed font-bold text-center md:text-left"
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

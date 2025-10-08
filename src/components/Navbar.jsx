import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-lg border-b border-cyberRed">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-red-600"
        >
          Nickuni
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-cyberRed transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyberRed transition">
            About
          </a>
          <a href="#certificate" className="hover:text-cyberRed transition">
            Certificate
          </a>
          <a href="#contact" className="hover:text-cyberRed transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-cyberRed flex flex-col px-6 py-4 space-y-4 text-gray-300">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyberRed"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyberRed"
          >
            About
          </a>
          <a
            href="#certificate"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyberRed"
          >
            Certificate
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-cyberRed"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

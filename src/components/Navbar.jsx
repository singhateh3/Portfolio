import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 px-4 sm:px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold">Dev Portfolio</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm">
          <a href="#about" className="hover:text-blue-400">
            About
          </a>
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col md:hidden mt-4 space-y-3 text-sm">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

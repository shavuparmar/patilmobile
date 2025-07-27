import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu after clicking any nav item
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-200 custom-font fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold">PatilMobille</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <a href="#home" className="text-xl hover:text-blue-600 transition">Home</a>
          <a href="#About" className="text-xl hover:text-blue-600 transition">About</a>
          <a href="#service" className="text-xl hover:text-blue-600 transition">Service</a>
          <a href="#contact" className="text-xl hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-200  shadow-inner">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-xl hover:text-blue-600 transition" onClick={handleNavClick}>Home</a>
            <a href="#About" className="text-xl hover:text-blue-600 transition" onClick={handleNavClick}>About</a>
            <a href="#service" className="text-xl hover:text-blue-600 transition" onClick={handleNavClick}>Service</a>
            <a href="#contact" className="text-xl hover:text-blue-600 transition" onClick={handleNavClick}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}

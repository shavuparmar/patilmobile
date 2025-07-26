import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can also use Heroicons or FontAwesome

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-200 custom-font">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold">
                    PatilMobille
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8">
                    <a href="#" className="text-xl hover:text-blue-600 transition">Home</a>
                    <a href="#" className="text-xl hover:text-blue-600 transition">About</a>
                    <a href="#" className="text-xl hover:text-blue-600 transition">Products</a>
                    <a href="#" className="text-xl hover:text-blue-600 transition">Contact</a>
                </nav>

                {/* Mobile Menu Icon */}
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
                <div className="md:hidden px-4 pb-4">
                    <nav className="flex flex-col center gap-4">
                        <a href="#" className="text-xl hover:text-blue-600 transition">Home</a>
                        <a href="#" className="text-xl hover:text-blue-600 transition">About</a>
                        <a href="#" className="text-xl hover:text-blue-600 transition">Products</a>
                        <a href="#" className="text-xl hover:text-blue-600 transition">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
}

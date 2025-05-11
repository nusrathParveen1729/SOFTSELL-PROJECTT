import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import logo from "../../../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-xl px-6 py-4 fixed top-0 w-full z-50 border-b-2 border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left - Logo */}
                <div className="w-24 h-16 flex items-center"> {/* Adjusted size here */}
                    <img src={logo} alt="Logo" className="h-full object-contain" />
                </div>

                {/* Center - Menu (hidden on mobile) */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium mx-auto">
                    <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">Home</li>
                    <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">About</li>
                    <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">How It Works</li>
                    <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">Pricing</li>
                </ul>

                {/* Right - CTA Button (hidden on mobile) */}
                <div className="hidden md:block">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300 shadow-md">
                        Sell Now
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <MoreVertical className="w-6 h-6 text-gray-800 hover:text-indigo-600 transition duration-200" />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-3 bg-white shadow-lg rounded-lg px-4 py-3 border-t-2 border-gray-200">
                    <ul className="space-y-3 text-gray-700 font-medium text-center">
                        <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">Home</li>
                        <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">About</li>
                        <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">How It Works</li>
                        <li className="hover:text-indigo-600 transition duration-200 cursor-pointer">Pricing</li>
                        <li>
                            <button className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition duration-300">
                                Sell Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

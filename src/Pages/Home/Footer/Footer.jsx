import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "../../../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Left: Logo and Description */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-24 h-24 flex items-center">
                            <img src={logo} alt="Logo" className="h-full w-full object-contain" />
                        </div>
                        <span className="text-4xl font-bold text-white"><h5>SoftSell</h5></span>
                    </div>
                    <p className="text-gray-400 mt-4 text-center md:text-left max-w-sm">
                        Simplify your software license management with SoftSell. Save costs by optimizing unused licenses and ensure compliance with ease.
                    </p>
                    <div className="flex gap-6 mt-6">
                        <a href="#" className="hover:text-indigo-500 transition transform hover:scale-110">
                            <Facebook size={28} />
                        </a>
                        <a href="#" className="hover:text-indigo-500 transition transform hover:scale-110">
                            <Twitter size={28} />
                        </a>
                        <a href="#" className="hover:text-indigo-500 transition transform hover:scale-110">
                            <Instagram size={28} />
                        </a>
                        <a href="#" className="hover:text-indigo-500 transition transform hover:scale-110">
                            <Linkedin size={28} />
                        </a>
                    </div>
                </div>

                {/* Center: Useful Links */}
                <div className="flex flex-col items-center md:items-start gap-6">
                    <h3 className="text-xl font-semibold text-gray-300">Explore SoftSell</h3>
                    <nav className="flex flex-col space-y-2">
                        <a href="#" className="hover:text-indigo-400 transition">How It Works</a>
                        <a href="#" className="hover:text-indigo-400 transition">Features</a>
                        <a href="#" className="hover:text-indigo-400 transition">Pricing</a>
                        <a href="#" className="hover:text-indigo-400 transition">Contact Us</a>
                    </nav>
                </div>

                {/* Right: Newsletter */}
                <div className="flex flex-col items-center md:items-end gap-6">
                    <h3 className="text-xl font-semibold text-gray-300">Stay Updated</h3>
                    <p className="text-gray-400 text-center md:text-left">Sign up for our newsletter to receive the latest updates, tips, and exclusive offers on software license management.</p>
                    <form className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-md border border-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition transform hover:scale-105"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400">
                <p className="text-sm">
                    © {new Date().getFullYear()} SoftSell. All rights reserved. | <a href="#" className="text-indigo-500 hover:text-indigo-400">Privacy Policy</a> | <a href="#" className="text-indigo-500 hover:text-indigo-400">Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

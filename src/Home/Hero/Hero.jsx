import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat mt-16"
            style={{
                backgroundImage:
                    "url('https://plus.unsplash.com/premium_photo-1712011181415-570ef105f57a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-50 mix-blend-multiply"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 flex items-center">
                <motion.div
                    className="w-full md:w-2/3 text-left text-white"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Unleash Your Business Potential with Cutting-Edge Solutions
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-2xl mb-8 text-gray-100"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Empower your business with smart, scalable, and tailored software solutions that drive efficiency and fuel growth.
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg">
                            Start Your Journey
                        </button>
                        <button className="border border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-xl transition duration-300">
                            Discover Our Services
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

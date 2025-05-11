import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Lily Davis",
        role: "Chief Technology Officer",
        company: "Alpha Innovations",
        quote: "Their software solutions have dramatically improved our workflow and efficiency. Highly reliable and easy to use.",
    },
    {
        name: "David Smith",
        role: "Senior IT Consultant",
        company: "Tech Solutions Co.",
        quote: "The integration was seamless, and the support was outstanding. This service has helped us optimize our IT infrastructure.",
    },
    {
        name: "Olivia Garcia",
        role: "Product Manager",
        company: "BlueWave Enterprises",
        quote: "Excellent service! We were able to streamline our operations with their solutions in no time.",
    },
    {
        name: "Daniel Johnson",
        role: "Operations Head",
        company: "Digital World Ltd.",
        quote: "From start to finish, the process was simple and efficient. It’s a game-changer for our business processes.",
    },
    {
        name: "Sophia Brown",
        role: "Software Architect",
        company: "FutureTech Systems",
        quote: "A great partner for innovation. The team was professional, and the technology exceeded our expectations.",
    },
];

const ITEMS_PER_VIEW = 3;

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prev) =>
            (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const getVisibleItems = () => {
        const items = [];
        for (let i = 0; i < ITEMS_PER_VIEW; i++) {
            items.push(testimonials[(index + i) % testimonials.length]);
        }
        return items;
    };

    return (
        <section className="py-20 bg-gradient-to-r from-gray-100 to-white px-6 md:px-12 relative overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        What Our Clients Say
                    </h2>
                    <div className="flex justify-center gap-4 relative z-10">
                        <button
                            onClick={handlePrev}
                            className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={handleNext}
                            className="p-2 rounded-full border-2 border-gray-300 hover:border-gray-500 hover:bg-gray-200 transition duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden relative">
                    <motion.div
                        key={index}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
                    >
                        {getVisibleItems().map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <p className="text-white text-lg mb-4 italic">
                                    “{item.quote}”
                                </p>
                                <div>
                                    <h4 className="font-semibold text-white">{item.name}</h4>
                                    <p className="text-sm text-gray-200">
                                        {item.role} — {item.company}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from"@/assets/Ktm.jpg";
import { Link } from "react-router-dom";

const suites = [
    {
        title: "Royal Suite",
        image: Img1,
        desc: "Your stay in the Penthouse begins with breakfast on the terrace backed by Eiffel Tower views, and ends with a glass of Champagne on the…",
    },
    {
        title: "LA CREOLA DINING",
        image: Img1,
        desc: "Your stay in the Penthouse begins with breakfast on the terrace backed by Eiffel Tower views, and ends with a glass of Champagne on the…",
    },
    {
        title: "The Penthouse",
        image: Img1,
        desc: "Your stay in the Penthouse begins with breakfast on the terrace backed by Eiffel Tower views, and ends with a glass of Champagne on the…",
        highlight: true,
    },
    {
        title: "Eiffel Tower Suite",
        image: Img1,
        desc: "Your stay in the Penthouse begins with breakfast on the terrace backed by Eiffel Tower views, and ends with a glass of Champagne on the…",
    },
    {
        title: "Parisian Suite",
        image: Img1,
        desc: "Your stay in the Penthouse begins with breakfast on the terrace backed by Eiffel Tower views, and ends with a glass of Champagne on the…",
    },
];

export default function SuitesCarousel() {
    const [current, setCurrent] = useState(0); // Start with Penthouse

    const prevSlide = () => setCurrent((prev) => (prev + 1 ) % suites.length);
    

    const nextSlide = () => setCurrent((prev) => (prev - 1 + suites.length) % suites.length);
   

    return (
        <div className="w-full flex flex-col  items-center py-10 ">
            <div className="flex gap-6 group overflow-hidden ">
                {suites.map((suite, index) => (
                    <motion.div
                        key={index}
                        className={`relative w-72 rounded-lg shadow-lg bg-white group-hover:blur-sm hover:!blur-none cursor-pointer overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110 ${suite.highlight ? "scale-105 shadow-xl" : "scale-155 shadow-6xl"
                            }`}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img
                            src={suite.image}
                            alt={suite.title}
                            className="w-full h-56 object-cover  transform transition-transform duration-300 ease-in-out hover:scale-110 "
                        />
                        <div className="p-6">
                            <h3 className="text-center text-gray-600 font-semibold tracking-[0.1em] uppercase">
                                {suite.title}
                            </h3>
                            {suite.desc && (
                                <>
                                    <div className="w-10 border-t border-black mx-auto my-3"></div>
                                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                                        {suite.desc}
                                    </p>
                                    <button className="mt-4 w-full bg-black text-white text-xs tracking-[0.2em] py-3 uppercase">
                                        <Link to="https://lacreola.com/index.php" target="Lacreola">
                                           Details
                                        </Link>
                                     
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

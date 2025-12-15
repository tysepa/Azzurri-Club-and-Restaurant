import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Img1 from "@/assets/Ktm.jpg";
import { Link } from "react-router-dom";

const suites = [
  { title: "Royal Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "LA CREOLA DINING", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "The Penthouse", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "Eiffel Tower Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "Parisian Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
   { title: "Royal Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "LA CREOLA DINING", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "The Penthouse", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "Eiffel Tower Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
  { title: "Parisian Suite", image: Img1, desc: "Your stay in the Penthouse begins..." },
];

export default function SuitesCarousel() {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(300);

  // 🔹 Update card width based on screen size
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) setCardWidth(260);
      else if (window.innerWidth < 1024) setCardWidth(280);
      else setCardWidth(300);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + suites.length) % suites.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % suites.length);

  return (
    <div className="relative w-full py-10 overflow-hidden">
      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full text-white"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-2 rounded-full text-white"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slider */}
      <motion.div
        className="flex gap-4 sm:gap-6 px-6 sm:px-20"
        animate={{ x: `-${current * cardWidth}px` }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
      >
        {suites.map((suite, index) => (
          <motion.div
            key={index}
            className="min-w-[260px] sm:min-w-[280px] lg:min-w-[300px]
                       bg-white rounded-xl shadow-lg overflow-hidden
                       hover:scale-105 transition-transform duration-300"
          >
            <img
              src={suite.image}
              alt={suite.title}
              className="w-full h-48 sm:h-56 object-cover"
            />

            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-xs sm:text-sm text-gray-600 font-semibold tracking-widest uppercase">
                {suite.title}
              </h3>

              <div className="w-8 sm:w-10 border-t border-black mx-auto my-3" />

              <p className="text-xs sm:text-sm text-gray-600">
                {suite.desc}
              </p>

              <Link
                to="https://lacreola.com/index.php"
                target="_blank"
                className="block mt-4 bg-black text-white text-[10px] sm:text-xs tracking-widest py-2 sm:py-3 uppercase"
              >
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

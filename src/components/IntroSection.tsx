import { useState } from "react";
import dish1 from "@/assets/dish-1.jpg";
import barInterior from "@/assets/Ktn.jpg";
import heroRestaurant from "@/assets/Ktm.jpg";
import { useRef, useEffect } from "react";

const images = [dish1, barInterior, heroRestaurant];
const AUTO_PLAY_INTERVAL = 3000;
const IntroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  
    const next = () => setCurrent((c) => (c + 1) % images.length);
    const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  
    useEffect(() => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(next, AUTO_PLAY_INTERVAL);
      return () => clearTimeout(timeoutRef.current);
    }, [current]);
  return (
    <section className="bg-black text-white min-h-[600px] flex flex-col md:flex-row items-stretch relative overflow-hidden">
      {/* Left: Carousel */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center relative">
        <div className="w-full h-[400px] flex items-center justify-center">
          <img src={images[current]} alt="CLAP Dish" className="object-cover w-full h-full rounded-lg opacity-80" />
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border border-white ${idx === current ? 'bg-white' : 'bg-transparent'}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Right: Text & Links */}
      <div className="md:w-1/2 w-full flex flex-col justify-center px-8 py-12 relative z-10">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            Azzurii is a fine-dining restaurant located within the Kigali. Our unique culinary concept seamlessly combines authenticity with innovation to create a truly immersive dining experience.
          </p>
          <p className="text-lg leading-relaxed">
            Explore two floors of culinary delight; on arrival, be whisked up to the 2th floor to experience the main restaurant, including live sushi and robata counters adding energy and engagement to your dining experience. Continue the journey up to the rooftop, to the bar, lounge, and terrace area, providing an elevated experience with unparalleled 180-degree views of Kigali.
          </p>
          <p className="text-lg leading-relaxed">
            Experience the full Azzurii dining experience, and try our menu – meaning “I leave it up to you” in Kigali.
          </p>
        </div>
        <hr className="my-8 border-muted-foreground/40" />
        <div className="space-y-2">
          <a href="/reserve" className="py-3 border-b border-muted-foreground/40 text-xs tracking-widest uppercase font-semibold flex justify-between items-center hover:text-primary transition-colors">Book a Table <span>&#8250;</span></a>
          <a href="/menus" className="py-3 border-b border-muted-foreground/40 text-xs tracking-widest uppercase font-semibold flex justify-between items-center hover:text-primary transition-colors">Menus <span>&#8250;</span></a>
          <a href="/contact" className="py-3 border-b border-muted-foreground/40 text-xs tracking-widest uppercase font-semibold flex justify-between items-center hover:text-primary transition-colors">Contact Us <span>&#8250;</span></a>
          <a href="#" className="py-3 border-b border-muted-foreground/40 text-xs tracking-widest uppercase font-semibold flex justify-between items-center hover:text-primary transition-colors">Sign up to our newsletter <span>&#8250;</span></a>
        </div>
        {/* Decorative SVGs can be added here if needed */}
      </div>
      {/* Optional: SVG floral decorations as absolutely positioned elements */}
      {/* ...SVG code can be added here for background flowers... */}
    </section>
  );
};

export default IntroSection;

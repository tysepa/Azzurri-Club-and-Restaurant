import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah K.",
    text: "An unforgettable dining experience! The ambiance and food are top-notch.",
  },
  {
    name: "Omar B.",
    text: "Best Rwandan cuisine in Kigali. Highly recommended!",
  },
  {
    name: "Lina M.",
    text: "The rooftop view and cocktails are amazing. Will come again!",
  },
];

const AUTO_PLAY_INTERVAL = 3000;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, AUTO_PLAY_INTERVAL);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">Testimonials</h2>
          <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What our guests are saying</p>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={prev} className="px-4 py-2 text-primary">&#8592;</button>
          <div className="bg-restaurant-darker p-8 rounded-lg shadow-lg mx-4 w-full max-w-md transition-all duration-500">
            <p className="text-lg italic mb-4">“{testimonials[current].text}”</p>
            <div className="text-primary font-semibold">{testimonials[current].name}</div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === current ? 'bg-primary' : 'bg-muted-foreground'} transition-colors`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          <button onClick={next} className="px-4 py-2 text-primary">&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

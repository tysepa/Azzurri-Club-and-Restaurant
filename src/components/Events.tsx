import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import FireAzzuri from "../assets/istockphoto-160993247-612x612.jpg"
import FireLacreola from "../assets/IMG_6857.jpg"

const events = [
  {
    id: 1,
    title: "Neon Night Party",
    date: "October 27, 2025",
    location: "KImihurura La creoala",
    image:FireLacreola,
    description:
      "Dance under the neon lights! Live DJs, light shows, and drinks all night long — an unforgettable experience awaits.",
  },
  {
    id: 2,
    title: "Beach Sunset Vibes",
    date: "November 5, 2025",
    location: "Nyarutarama Indochine",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    description:
      "Enjoy sunset rhythms by the lake with live bands, BBQ, and a tropical atmosphere you’ll never forget.",
  },
  {
    id: 3,
    title: "Halloween Costume Bash",
    date: "October 31, 2025",
    location: "Downtown Azzuri Club",
    image:FireAzzuri,
    description:
      "Spooky music, crazy costumes, and contests with big prizes. Come dressed to impress… or scare!",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-restaurant-darker text-white px-6 py-12">
      {/* HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-700 via-yellow-300 to-yellow-50 bg-clip-text text-transparent">
          Upcoming Party Events
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Experience unforgettable nights full of energy, music, and good vibes.
        </p>
      </motion.div>

      {/* EVENTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-primary bg-slate-900 border border-slate-700"
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <motion.img
                src={event.image}
                alt={event.title}
                className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <div className="flex items-center gap-3 text-gray-400 text-sm mb-2">
                <Calendar size={16} /> <span>{event.date}</span>
                <MapPin size={16} /> <span>{event.location}</span>
              </div>

              <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="w-full py-2 bg-gradient-to-r from-yellow-600 via-orange-600 to-indigo-600 rounded-lg font-semibold text-sm hover:opacity-90 transition"
              >
                Learn More
              </motion.button>
            </div>

            {/* Glow Animation Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-3xl"></div>
          </motion.div>
        ))}
      </div>

      {/* FOOTER ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-16 text-gray-400 text-sm"
      >
        <p></p>
      </motion.div>
    </div>
  );
};

export default EventsPage;

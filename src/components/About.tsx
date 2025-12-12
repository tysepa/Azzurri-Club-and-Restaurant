import { motion } from "framer-motion";
import highRes from "@/assets/high_res-25.jpg";
const About = () => {
  return (
    <motion.section id="about" className="py-24 bg-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div className="space-y-8" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <div>
                <motion.h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                  Azzurii Excellence
                </motion.h2>
                <motion.div className="w-16 h-px restaurant-gold-gradient mb-8" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} />
              </div>
              <div className="space-y-6 elegant-text">
                <motion.p className="text-lg leading-relaxed text-foreground" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                  Azzurii Restaurant, nestled in Downtown, overlooks the city and hills of Kigali. 
                  We are a premier destination for discerning diners seeking the epitome of fine dining La creola cuisine.
                </motion.p>
                <motion.p className="text-lg leading-relaxed text-muted-foreground" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                  Welcome to embark on an extraordinary culinary journey like no other. As one of the best restaurants in the city, 
                  Azzurii offers a rooftop dining experience with a modern twist.
                </motion.p>
                <motion.p className="text-lg leading-relaxed text-muted-foreground" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
                  We seek to bring our sensory dining experience with a modern twist to create 
                  unforgettable moments for every guest.
                </motion.p>
              </div>
              <div className="pt-6">
                <div className="flex items-center space-x-8">
                  <motion.div className="text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                    <div className="text-3xl font-light text-primary mb-2">15+</div>
                    <div className="text-sm tracking-wide text-muted-foreground">YEARS EXPERIENCE</div>
                  </motion.div>
                  <div className="w-px h-12 bg-border" />
                  <motion.div className="text-center" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                    <div className="text-3xl font-light text-primary mb-2">5★</div>
                    <div className="text-sm tracking-wide text-muted-foreground">STAR RATING</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {/* Image Content */}
            <motion.div className="flex justify-center md:justify-end" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              <motion.img
                src={highRes}
                alt="Restaurant Logo"
                className="rounded-lg shadow-lg w-80 h-80 object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
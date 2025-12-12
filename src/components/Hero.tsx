import { Button } from "@/components/ui/button";
import logo from "../../public/Image-removebg-preview.png";
import heroImage from "@/assets/hero-restaurant.jpg";
import video from "@/assets/WhatsApp Video 2025-10-16 at 1.15.02 PM.mp4";
import helloVideo from "@/assets/hello-video.mp4";
import { motion } from "framer-motion";
import CV from "@/assets/menu.pdf";

const Hero = () => {
  return (
    <motion.section className="relative min-h-screen flex items-center justify-center overflow-hidden" initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          {/* Fallback to image if video fails */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
        </video>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 restaurant-gradient-bg opacity-10" />
      {/* Content */}
      <motion.div className="relative z-10 text-center max-w-4xl mx-auto px-6" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
        <motion.img src={logo} alt="Restaurant Site Image" style={{ width: '490px', margin: '2rem auto 2rem auto' }} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} />
        {/* <motion.h1 className="restaurant-title mb-6" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          AZZURII BY LA CREOLA
        </motion.h1> */}
        <motion.div className="w-24 h-px restaurant-gold-gradient mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} />
        {/* <motion.h2 className="restaurant-title mb-8" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          & LOUNGE
        </motion.h2> */}
        <motion.p className="restaurant-subtitle mb-12 max-w-2xl mx-auto" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          Experience the finest La creola cuisine with a modern twist.
          Located in the heart of downtown, overlooking the hills of Kigali.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-32 justify-center" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
          <Button variant="default" size="lg" className="px-16 py-4">
            <a href="/event">
            EVENTS    </a>
          </Button>
          <Button variant="outline" size="lg"  className="px-10 py-4">
           <a href="/menus"> VIEW MENU </a>
          </Button>
        </motion.div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left 1/3 transform -translate-x-1/2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <div className="w-px h-12 bg-primary opacity-60 animate-bounce" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
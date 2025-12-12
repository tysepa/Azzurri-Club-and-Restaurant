import dishImage from "@/assets/dish-1.jpg";
import barImage from "@/assets/bar-interior.jpg";
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    {
      src: dishImage,
      alt: "Signature Rwandan dish with artistic presentation",
      title: "Culinary Artistry"
    },
    {
      src: barImage,
      alt: "Elegant bar interior with premium spirits",
      title: "Premium Bar Experience"
    },
    {
      src: dishImage,
      alt: "Another signature creation",
      title: "Innovative Flavors"
    }
  ];

  return (
    <motion.section id="gallery" className="py-24 bg-background" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="container mx-auto px-6">
        <motion.div className="text-center mb-16" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <motion.h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>Experience</motion.h2>
          <motion.div className="w-16 h-px restaurant-gold-gradient mx-auto mb-6" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} />
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto elegant-text" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            Immerse yourself in our world of culinary excellence and sophisticated ambiance
          </motion.p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square hover-scale"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Content */}
              <motion.div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-light tracking-wide mb-2">{image.title}</h3>
                <div className="w-12 h-px bg-primary" />
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Call to Action */}
        <motion.div className="text-center mt-16" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center space-x-4 text-muted-foreground">
            <div className="w-12 h-px bg-border" />
            <span className="text-sm tracking-[0.2em]">MORE ON INSTAGRAM</span>
            <div className="w-12 h-px bg-border" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Map from "./Map";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
    <Navigation />
    <motion.section id="location" className="py-24 bg-card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <div className="container mx-auto mt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div className="space-y-12" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              <div>
                <motion.h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                  Visit Us
                </motion.h2>
                <motion.div className="w-16 h-px restaurant-gold-gradient mb-8" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} />
                <motion.p className="text-lg text-muted-foreground elegant-text" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                  Located in the heart of downtown with breathtaking views of the hills of Kigali
                </motion.p>
              </div>
              <div className="space-y-8">
                <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
                  <h3 className="text-xl font-light tracking-wide text-primary mb-3">Address</h3>
                  <p className="text-muted-foreground elegant-text">
                    Kigali Bus parking, Downtown<br />
                    Muhima, Near Advitiste church
                  </p>
                </motion.div>
                <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
                  <h3 className="text-xl font-light tracking-wide text-primary mb-3">Hours</h3>
                  <div className="space-y-2 text-muted-foreground elegant-text">
                    <div className="flex justify-between">
                      <span>Tuesday - Thursday</span>
                      <span>6:00 PM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday - Saturday</span>
                      <span>6:00 PM - 2:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </motion.div>
                <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }}>
                  <h3 className="text-xl font-light tracking-wide text-primary mb-3">Contact</h3>
                  <div className="space-y-2 text-muted-foreground elegant-text">
                    <p>+250 793 084 995</p>
                    <p>reservations@Azzurirestaurant.com</p>
                  </div>
                </motion.div>
              </div>
              <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <Button variant="default" size="lg" className="px-8">
                  <a href="/reserve">
                  MAKE RESERVATION </a>
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  GET DIRECTIONS
                </Button>
              </motion.div>
            </motion.div>
            {/* Map Placeholder */}
            <motion.div className="relative" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
              <motion.div className="aspect-square bg-muted rounded-lg overflow-hidden" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-4 w-[520px] sm:w-[120px] md: w-[320px] lg:w-[520px]">
                      {/*  map link */}
                      <Map />
                      <img src="https://www.google.com/maps/place/KN+1+Ave,+Kigali/@-1.943213,30.0678857,15z/data=!4m15!1m8!3m7!1s0x19dca4209428bbdf:0xd6c3490c256f928!2sKN+1+Ave,+Kigali!3b1!8m2!3d-1.9432134!4d30.0679365!16s%2Fg%2F12xqzb1v0!3m5!1s0x19dca4209428bbdf:0xd6c3490c256f928!8m2!3d-1.9432134!4d30.0679365!16s%2Fg%2F12xqzb1v0?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D" alt="map"/>
                    </div>
                    {/* <p className="text-sm tracking-wide">INTERACTIVE MAP</p>
                    <p className="text-xs mt-2">Downtown Location</p> */}

                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
    {/* <Footer /> */}
    </>
  );
};

export default Contact;
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import aboutVideo from "@/assets/One-video.mp4";
import Footer from "@/components/Footer";
import homes from "@/assets/Ktn.jpg";
import barInterior from "@/assets/Ktm.jpg";
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Video Section */}
      

      {/* Perfect Harmony Section */}
      

      {/* Architecture & Design Section */}
      <section className="py-24 bg-restaurant-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-4">
                        {/* image */}
                        <img src={barInterior} alt="Japanese Architecture" className="rounded-lg shadow-lg object-cover" />
                      </div>
                      <p className="text-sm tracking-wide">RWANDAN ARCHITECTURE</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8 order-1 md:order-2">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                    Precision & Pleasure
                  </h2>
                  <div className="w-16 h-px restaurant-gold-gradient mb-8" />
                </div>
                
                <div className="space-y-6 elegant-text">
                  <p className="text-lg leading-relaxed text-foreground">
                    Azzurii's concept is based on traditional of world architecture by eliminating the boundaries 
                    between the client [outdoors] and "Services" [indoors].
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Natural materials, stone, and woods were used to respect the natural atmosphere of . 
                    Rwanda techniques were used such as carved wood screen.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Curated by Rwandan designer, founder of Studio, 
                    creating an authentic Rwanda cultural feeling with a modern twist.
                  </p>
                </div>
                
                <div className="pt-6">
                  <Button variant="default" size="lg" className="px-8 py-4">
                    <a href="/reserve">
                    
                    BOOK A TABLE
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default AboutUs;
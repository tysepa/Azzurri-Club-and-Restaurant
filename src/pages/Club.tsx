import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import aboutVideo from "@/assets/One-video.mp4";
import Footer from "@/components/Footer";
import homes from "@/assets/clubpic.jpeg";
import barInterior from "@/assets/Ktm.jpg";
const Club = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Video Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 restaurant-gradient-bg opacity-10" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="restaurant-title mb-6 animate-fade-in">
            AUTHENTICITY
          </h1>
          <div className="w-24 h-px restaurant-gold-gradient mx-auto mb-6" />
          <h2 className="restaurant-title mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            & INNOVATION
          </h2>
        </div>
      </section>

      {/* Perfect Harmony Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                    Perfect Harmony
                  </h2>
                  <div className="w-16 h-px restaurant-gold-gradient mb-8" />
                </div>
                
                <div className="space-y-6 elegant-text">
                  <p className="text-lg leading-relaxed text-foreground">
                    Azzurii Restaurant first opened its doors in 2025 in Kigali,Muhima. Since then, it has rapidly expanded, 
                    with locations in prominent All Rwanda.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Azzurii is located in the downtown of Kigali  city, in the SAWA CITY building.
                    Our aim is to create a garden-like space in a location that overlooks the city of Kigali and the Hills.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Azzurii is Restaurent and Club, a designed space where all the guests can enjoy a full best fine dining experience. 
                    It is a new cultural place that combines the wonderful scenery of Beirut with More culture.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[3/4]  rounded-lg overflow-hidden">
                  <div className="w-full h-full from-muted to-card flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-4 h-[38rem]">
                        {/* image */}
                        <img src={homes} alt="Restaurant Logo" className="rounded-lg shadow-lg object-cover" />
                      </div>
                      <p className="text-sm tracking-wide">SKY GARDEN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Design Section */}
      

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default Club;
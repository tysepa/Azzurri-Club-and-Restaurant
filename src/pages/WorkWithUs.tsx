import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "@/components/Footer";

const WorkWithUs = () => {
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
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1c9a1a8b4&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
        </div>
        
        <div className="absolute inset-0 restaurant-gradient-bg opacity-80" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="restaurant-title mb-6 animate-fade-in">
            JOIN THE TEAM
          </h1>
          <div className="w-24 h-px restaurant-gold-gradient mx-auto mb-6" />
          <h2 className="restaurant-title mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AT Azzurii by La creola
          </h2>
          
          <p className="restaurant-subtitle mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            As we continue to grow and expand, we invite passionate and talented individuals 
            to join our dynamic team at La creola.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                    Why Join La creola?
                  </h2>
                  <div className="w-16 h-px restaurant-gold-gradient mb-8" />
                </div>
                
                <div className="space-y-6 elegant-text">
                  <p className="text-lg leading-relaxed text-foreground">
                    At Azzurii by La creola, we are dedicated to providing an exceptional dining experience 
                    through our innovative and authentic  cuisine.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    We believe that our success is driven by the enthusiasm, creativity, and expertise of our team members.
                    Join a distinguished team that values excellence, creativity, and dedication.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Work alongside some of the best hospitality professionals in the industry, 
                    learning and growing in a fast-paced and rewarding atmosphere.
                  </p>
                </div>
                
                <div className="pt-6">
                  <div className="flex items-center space-x-8">
                    <div className="text-center">
                      <div className="text-3xl font-light text-primary mb-2">4+</div>
                      <div className="text-sm tracking-wide text-muted-foreground">GLOBAL LOCATIONS</div>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <div className="text-3xl font-light text-primary mb-2">100+</div>
                      <div className="text-sm tracking-wide text-muted-foreground">TEAM MEMBERS</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[3/4] bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-6xl mb-4">👨‍🍳</div>
                      <p className="text-sm tracking-wide">JOIN OUR TEAM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-24 bg-restaurant-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                Career Opportunities
              </h2>
              <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We are always on the lookout for individuals who possess the enthusiasm, drive, 
                and skills to excel in the hospitality industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-xl font-light text-primary mb-4">Front of House</h3>
                <p className="text-muted-foreground">
                  Service roles focused on creating exceptional guest experiences
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl mb-4">👨‍🍳</div>
                <h3 className="text-xl font-light text-primary mb-4">Culinary Team</h3>
                <p className="text-muted-foreground">
                  Kitchen positions for passionate culinary professionals
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-lg">
                <div className="text-4xl mb-4">🍸</div>
                <h3 className="text-xl font-light text-primary mb-4">Bar Team</h3>
                <p className="text-muted-foreground">
                  Bartending and mixology roles for beverage enthusiasts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                Apply Now
              </h2>
              <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
              <p className="text-lg text-muted-foreground">
                Send us your application and join our dynamic team
              </p>
            </div>

            <form className="space-y-6 bg-restaurant-darker p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input id="firstName" placeholder="Your first name" className="bg-card border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input id="lastName" placeholder="Your last name" className="bg-card border-border" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="bg-card border-border" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone</Label>
                <Input id="phone" type="tel" placeholder="Your phone number" className="bg-card border-border" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position" className="text-foreground">Position of Interest</Label>
                <Input id="position" placeholder="e.g., Server, Chef, Bartender" className="bg-card border-border" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Cover Letter</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about yourself and why you want to join CLAP..."
                  className="bg-card border-border min-h-[120px]"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                SUBMIT APPLICATION
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkWithUs;
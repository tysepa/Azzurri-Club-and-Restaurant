import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
// import menuVideo from "@/assets/two-video.mp4";
import Footer from "@/components/Footer";
import dish1 from "@/assets/dish-1.jpg";
import barInterior from "@/assets/bar-interior.jpg";
import beverages from "@/assets/beverages.jpg";
import logo from "@/assets/cocktail.jpg";
// import homes from "@/assets/food.jpg";
import Pdf from "./Pdf";
const Menus = () => {
  const menuCategories = [
    { name: "FOOD", description: "Authentic Japanese fine dining experience",  image: dish1 },
    { name: "WINE", description: "Carefully curated wine selection", image: barInterior },
    { name: "BEVERAGES", description: "Premium non-alcoholic beverages",  image: beverages },
    { name: "COCKTAILS", description: "Signature summer-crafted cocktails",image: logo },
    { name: "CIGARS", description: "Premium cigar collection", icon: "🚬",image: ""}
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Video Section */}
      

      {/* Precision & Pleasure Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                Precision & Pleasure
              </h2>
              <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our skilled chefs meticulously prepare a personalised selection of dishes, 
                showcasing the best of Azzurii's culinary offerings and well-selected summer-crafted cocktails.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {menuCategories.map((category, index) => (
                <div key={category.name} className="bg-restaurant-darker p-8 rounded-lg hover:bg-muted transition-colors flex flex-col items-center">
                  <img src={category.image} alt={category.name + ' image'} className="w-full h-40 object-cover rounded mb-4" />
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-light text-primary mb-4 tracking-[0.1em]">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <Button variant="outline" size="lg" className="w-full">
                  <a >
                    VIEW {category.name} MENU</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Gallery */}
      <section className="py-24 bg-restaurant-darker">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
           
              
              
              

            {/* Menu Gallery Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">
                        {item % 2 === 0 ? '🍱' : item % 3 === 0 ? '🍸' : '🍣'}
                      </div>
                      <p className="text-xs tracking-wide">MENU ITEM {item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience More Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                Reserve Your Experience
              </h2>
              <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Join us at La creola and immerse yourself in a dining experience like no other. 
                Whether you're here for the food, wine, beverages, cocktails, or cigars, we promise an unforgettable evening.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="lg" className="px-8 py-4">
                  <a href="/reserve"> BOOK A TABLE  </a>
                  
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4">
                  DOWNLOAD MENU
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-4">🏮</div>
                    <p className="text-sm tracking-wide">BAR COUNTER</p>
                  </div>
                </div>
              </div>
              
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-6xl mb-4">🌃</div>
                    <p className="text-sm tracking-wide">ROOFTOP VIEW</p>
                  </div>
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

export default Menus;
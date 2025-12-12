import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import menuVideo from "@/assets/menu-video.mp4";
import Footer from "@/components/Footer";
import dish1 from "@/assets/stock.jpeg";
import barInterior from "@/assets/WhatsApp Image 2025-06-30 at 4.44.04 PM.jpeg";
import beverages from "@/assets/firstb.jpeg";
import logo from "@/assets/cocktail.jpg";
import homes from "@/assets/food.jpg";
const Menus = () => {
    const menuCategories = [
        { name: "STOCK OF WINE", description: "Authentic Japanese fine dining experience", image: dish1 },
        { name: "VIEU", description: "Carefully curated wine selection", image: barInterior },
        { name: "ROOF TOP", description: "Premium non-alcoholic beverages", image: beverages },
        { name: "COCKTAILS", description: "Signature summer-crafted cocktails", image: logo },
        { name: "CIGARS", description: "Premium cigar collection", icon: "🚬", image: "" }
    ];

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
                        <source src={menuVideo} type="video/mp4" />
                    </video>
                </div>

                <div className="absolute inset-0 restaurant-gradient-bg opacity-10" />

                <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                    <h1 className="restaurant-title mb-6 animate-fade-in">
                        UNPARALLELED
                    </h1>
                    <div className="w-24 h-px restaurant-gold-gradient mx-auto mb-6" />
                    <h2 className="restaurant-title mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        EXCELLENCE
                    </h2>

                    <p className="restaurant-subtitle mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        Immerse yourself in the most authentic Japanese fine dining experience in Beirut.
                    </p>
                </div>
            </section>



            {/* Menu Gallery */}
            <section className="py-24 bg-restaurant-darker">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">
                                        Culinary Artistry
                                    </h2>
                                    <div className="w-16 h-px restaurant-gold-gradient mb-8" />
                                </div>

                                <div className="space-y-6 elegant-text">
                                    <p className="text-lg leading-relaxed text-foreground">
                                        Experience the essence of Japanese cuisine while enjoying the best sunset in Beirut city,
                                        featuring various performances that enhance your dining experience.
                                    </p>

                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        Our menu showcases unexpected and surprising combinations that elevate traditional
                                        Japanese cuisine to new heights, from smaller plates to indulgent mains.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                                    <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center">
                                        <div className="text-center text-muted-foreground">
                                            {/* image */}
                                            <img src={homes} alt="" />
                                            <div className="text-6xl mb-4">
                                            </div>
                                            {/* <p className="text-sm tracking-wide">FINE DINING EXPERIENCE</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {menuCategories.map((category, index) => (
                                <div key= {category.name} className="bg-restaurant-darker p-8 rounded-lg hover:bg-muted transition-colors flex flex-col items-center">
                                    <img src={category.image}  className="w-full h-80 object-cover rounded mb-4" />
                                    <h3 className="text-2xl font-light text-primary mb-1 tracking-[0.1em]">
                                        {category.name}
                                    </h3>
                                    
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>.

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Menus;

import Navigation from "@/components/Navigation";
import IntroSection from "@/components/IntroSection";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Bland from "@/components/Bland";
import Testimonials from "@/components/Testimonials.new";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Pdf from "@/pages/Pdf";
import EventsPage from "@/components/Events";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <IntroSection />
      <About />
      <EventsPage/>
      <Gallery />
      {/* <Pdf /> */}
      <Bland />
      <Testimonials />
      <BlogSection />
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
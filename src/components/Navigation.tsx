import { Button } from "@/components/ui/button";
import logo from "../../public/Image-removebg-preview.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {/* link to main page */}
          <a href="/"><img src={logo} alt="Restaurant Logo" style={{ width: '80px', marginRight: '0.75rem' }} /></a> 
            <span className="text-[10px] font-thin tracking-widest mt-[5px] text-primary">by La creola</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-sm font-light active tracking-wide text-muted-foreground hover:text-primary transition-colors">
             HOME 
            </a>
            <a href="/about-us" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors">
              ABOUT US
            </a>
            <a href="/restaurent" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors">
              RESTAURENT
            </a>
            <a href="/club" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors">
              CLUB NIGHT
            </a>
            <a href="/contact" className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors">
              CONTACT
            </a>
          </div>
          
          {/* Book Table Button */}
          <Button  variant="outline" className="hidden md:block">
            <a href="/reserve"> 
            BOOK A TABLE
            </a>
          </Button>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
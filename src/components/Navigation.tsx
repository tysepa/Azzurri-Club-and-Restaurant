import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../../public/Image-removebg-preview.png";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <img
                src={logo}
                alt="Restaurant Logo"
                className="w-[120px] mr-3"
              />
            </a>
            <span className="text-[10px] font-thin tracking-widest mt-[5px] text-primary">
              by La creola
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["HOME", "ABOUT US", "RESTAURENT", "CLUB NIGHT", "CONTACT"].map(
              (item, index) => (
                <a
                  key={index}
                  href={
                    item === "HOME"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "-")}`
                  }
                  className="text-sm font-light tracking-wide text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Desktop Button */}
          <Button variant="outline" className="hidden md:block">
            <a href="/reserve">BOOK A TABLE</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-background px-6 pb-6 space-y-4 border-t border-border">
          <a onClick={() => setIsOpen(false)} href="/" className="block text-sm">HOME</a>
          <a onClick={() => setIsOpen(false)} href="/about-us" className="block text-sm">ABOUT US</a>
          <a onClick={() => setIsOpen(false)} href="/restaurent" className="block text-sm">RESTAURENT</a>
          <a onClick={() => setIsOpen(false)} href="/club" className="block text-sm">CLUB NIGHT</a>
          <a onClick={() => setIsOpen(false)} href="/contact" className="block text-sm">CONTACT</a>

          <Button variant="outline" className="w-full mt-4">
            <a href="/reserve">BOOK A TABLE</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

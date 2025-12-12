const Footer = () => {
  return (
    <footer className="bg-restaurant-darker py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="text-3xl font-light tracking-[0.2em] text-primary mb-2">La creola</div>
            <div className="flex space-x-4 text-sm tracking-wide text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary transition-colors">OpenTable</a>
            </div>
            <div className="w-16 h-px restaurant-gold-gradient" />
          </div>
          {/* Column 2: Quick Links */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="text-lg font-semibold text-primary mb-2">Quick Links</div>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#" className="hover:text-primary transition-colors">Menus</a>
              <a href="#" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#" className="hover:text-primary transition-colors">Contact</a>
              <a href="/login" className="hover:text-primary transition-colors">Login Admin</a>
            </div>
          </div>
          {/* Column 3: Subscription Form */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <div className="text-lg font-semibold text-primary mb-2">Subscribe</div>
            <form className="w-full max-w-xs mx-auto flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="text-xs text-muted-foreground">Get updates & offers from Azzurii Restaurant.</div>
          </div>
        </div>
        <div className="mt-12 text-center text-xs tracking-wide text-muted-foreground">
          <a href="http://localhost:5173/">
          © 2024 Azzurii Restaurant. All rights reserved by TYS EPA.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

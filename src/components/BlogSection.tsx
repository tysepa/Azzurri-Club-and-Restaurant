import barInterior from "@/assets/bar-interior.jpg";
import dish1 from "@/assets/dish-1.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

const blogPosts = [
  {
    title: "Summer Cocktails: Behind the Bar",
    excerpt: "Discover our signature summer cocktails and the inspiration behind each creation.",
    date: "August 2025",
    image: barInterior,
  },
  {
    title: "Chef’s Table: Culinary Artistry",
    excerpt: "Meet our chefs and learn about their approach to Rwandan fine dining.",
    date: "July 2025",
    image: dish1,
  },
  {
    title: "Rooftop Dining: The Best Sunset in Kigali",
    excerpt: "Experience the magic of rooftop dining with breathtaking views.",
    date: "June 2025",
    image: heroRestaurant,
  },
];

const BlogSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light tracking-[0.1em] text-primary mb-4">From Our Blog</h2>
        <div className="w-16 h-px restaurant-gold-gradient mx-auto mb-8" />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Latest stories and updates</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <div key={i} className="bg-card p-8 rounded-lg shadow-lg border border-border">
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded mb-4" />
            <div className="text-xs text-muted-foreground mb-2">{post.date}</div>
            <h3 className="text-xl font-light text-primary mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <a href="#" className="text-primary hover:underline text-sm">Read More</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;

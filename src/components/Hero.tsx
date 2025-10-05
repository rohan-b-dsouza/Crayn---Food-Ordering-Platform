import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-food.jpg";
import LocationInput from "@/components/LocationInput";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [showCities, setShowCities] = useState(false);
  const cityListRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const submitSearch = () => {
    const trimmed = query.trim();
    navigate(trimmed ? `/restaurants?q=${encodeURIComponent(trimmed)}` : "/restaurants");
  };

  const topCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Indore",
  ];

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-[1.15]">
              Satisfy Your{" "}
              <span className="text-gradient pb-2">Cravings</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Anytime, Anywhere. Order from your favorite restaurants and get it delivered fast.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-2 shadow-card-hover"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <LocationInput
                value={location}
                onChange={setLocation}
                onSelect={(v) => {
                  setLocation(v);
                  navigate(`/restaurants?city=${encodeURIComponent(v)}`);
                }}
                placeholder="Enter your delivery location"
              />
              <div className="flex-1 flex items-center px-4 py-2 bg-muted rounded-xl">
                <Search className="h-5 w-5 text-muted-foreground mr-2" />
                <Input
                  placeholder="Search for restaurants or dishes..."
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") submitSearch(); }}
                />
              </div>
              <Button size="lg" className="gradient-hero px-8 rounded-xl" onClick={submitSearch}>
                Search
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-8 text-white"
          >
            <div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-white/80">Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">30min</div>
              <div className="text-white/80">Avg Delivery</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

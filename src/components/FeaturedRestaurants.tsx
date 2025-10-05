import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";

export const restaurants = [
  {
    id: 1,
    name: "Burger Palace",
    image: restaurant1,
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "20-30 min",
    distance: "2.5 km",
    offer: "50% OFF up to ₹100",
    categories: ["Burgers", "American"],
  },
  {
    id: 2,
    name: "Pizza Italia",
    image: restaurant2,
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35 min",
    distance: "3.2 km",
    offer: "Free Delivery",
    categories: ["Pizza", "Italian"],
  },
  {
    id: 3,
    name: "Sushi Master",
    image: restaurant3,
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "30-40 min",
    distance: "4.1 km",
    offer: "40% OFF up to ₹150",
    categories: ["Seafood", "Japanese"],
  },
  {
    id: 4,
    name: "Biryani House",
    image: restaurant4,
    cuisine: "Indian",
    rating: 4.6,
    deliveryTime: "25-35 min",
    distance: "1.8 km",
    offer: "Buy 1 Get 1",
    categories: ["Biryani", "Indian"],
  },
];

const FeaturedRestaurants = ({ filter }: { filter?: { query?: string; category?: string; city?: string } }) => {
  const normalizedQuery = filter?.query?.toLowerCase().trim();
  const normalizedCategory = filter?.category?.toLowerCase().trim();
  const normalizedCity = filter?.city?.toLowerCase().trim();
  const filtered = restaurants.filter(r => {
    const matchesQuery = !normalizedQuery || r.name.toLowerCase().includes(normalizedQuery) || r.cuisine.toLowerCase().includes(normalizedQuery);
    const matchesCategory = !normalizedCategory || r.categories?.some(c => c.toLowerCase() === normalizedCategory);
    const matchesCity = !normalizedCity || ["mumbai","delhi","bengaluru","hyderabad","chennai","pune","kolkata","ahmedabad","jaipur","surat","lucknow","indore"].includes(normalizedCity);
    return matchesQuery && matchesCategory && matchesCity;
  });
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Restaurants</h2>
            <Link to="/restaurants" className="text-primary hover:underline">See All →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(filtered.length ? filtered : restaurants).map((restaurant, index) => (
              <motion.div
                key={restaurant.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link to={`/restaurant/${restaurant.id}`}>
                  <Card className="overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 border-0">
                    <div className="relative">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                        {restaurant.offer}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{restaurant.distance}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;

import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, MapPin, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/CartContext";
import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();
  const [isFavorite, setIsFavorite] = useState(false);

  const restaurantMap: Record<string, { title: string; cuisine: string; image: string; rating: number; time: string; distance: string; badge?: string } > = {
    "1": { title: "Burger Palace", cuisine: "American", image: restaurant1, rating: 4.5, time: "20-30 min", distance: "2.5 km", badge: "50% OFF up to ₹100" },
    "2": { title: "Pizza Italia", cuisine: "Italian", image: restaurant2, rating: 4.7, time: "25-35 min", distance: "3.2 km", badge: "Free Delivery" },
    "3": { title: "Sushi Master", cuisine: "Japanese", image: restaurant3, rating: 4.8, time: "30-40 min", distance: "4.1 km", badge: "40% OFF up to ₹150" },
    "4": { title: "Biryani House", cuisine: "Indian", image: restaurant4, rating: 4.6, time: "25-35 min", distance: "1.8 km", badge: "Buy 1 Get 1" },
  };

  const selected = id && restaurantMap[id] ? restaurantMap[id] : { title: "Restaurant", cuisine: "Multi-cuisine", image: restaurant1, rating: 4.5, time: "25-35 min", distance: "3.0 km" };

  const menuItems = [
    { id: 1, name: "Margherita Pizza", description: "Classic pizza with tomato, mozzarella & basil", price: 299, category: "Pizzas", image: "/placeholder.svg" },
    { id: 2, name: "Pepperoni Pizza", description: "Loaded with pepperoni & cheese", price: 349, category: "Pizzas", image: "/placeholder.svg" },
    { id: 3, name: "Garlic Bread", description: "Crispy garlic bread with herbs", price: 149, category: "Starters", image: "/placeholder.svg" },
    { id: 4, name: "Caesar Salad", description: "Fresh romaine with caesar dressing", price: 199, category: "Salads", image: "/placeholder.svg" },
    { id: 5, name: "Tiramisu", description: "Classic Italian dessert", price: 249, category: "Desserts", image: "/placeholder.svg" },
  ];

  const addToCart = (item: typeof menuItems[0]) => {
    addItem({ id: item.id, name: item.name, price: item.price, image: item.image, restaurant: "Pizza Italia" });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Restaurant Header */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <Card className="p-6 mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{selected.title}</h1>
                <p className="text-muted-foreground mb-4">{selected.cuisine}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{selected.rating}</span>
                    <span className="text-muted-foreground">(500+ ratings)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selected.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{selected.distance}</span>
                  </div>
                </div>
              </div>
              <Button
                variant={isFavorite ? "default" : "outline"}
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
            </div>
            {selected.badge && (
              <Badge className="mt-4 bg-primary text-primary-foreground">
                {selected.badge}
              </Badge>
            )}
          </Card>

          {/* Menu */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="pizzas">Pizzas</TabsTrigger>
              <TabsTrigger value="starters">Starters</TabsTrigger>
              <TabsTrigger value="salads">Salads</TabsTrigger>
              <TabsTrigger value="desserts">Desserts</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 gap-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card className="p-4 hover:shadow-card-hover transition-all">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold">₹{item.price}</span>
                            <Button
                              size="sm"
                              onClick={() => addToCart(item)}
                              className="gap-1"
                            >
                              <Plus className="h-4 w-4" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {["pizzas", "starters", "salads", "desserts"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-4">
                  {menuItems
                    .filter((item) => item.category.toLowerCase() === category)
                    .map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Card className="p-4 hover:shadow-card-hover transition-all">
                          <div className="flex gap-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-bold">₹{item.price}</span>
                                <Button
                                  size="sm"
                                  onClick={() => addToCart(item)}
                                  className="gap-1"
                                >
                                  <Plus className="h-4 w-4" />
                                  Add
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantDetail;

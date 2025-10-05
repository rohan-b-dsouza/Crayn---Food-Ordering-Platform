import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Heart, Clock, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const orders = [
    { id: "CR12345", restaurant: "Pizza Italia", amount: 796, status: "Delivered", date: "Dec 15, 2025" },
    { id: "CR12344", restaurant: "Biryani House", amount: 549, status: "Cancelled", date: "Dec 14, 2025" },
    { id: "CR12343", restaurant: "Burger Palace", amount: 425, status: "Delivered", date: "Dec 12, 2025" },
  ];

  const favorites = [
    { id: 1, name: "Pizza Italia", cuisine: "Italian", rating: 4.7, image: "/placeholder.svg" },
    { id: 2, name: "Biryani House", cuisine: "Indian", rating: 4.6, image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6">
                <div className="text-center mb-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    Addresses
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="orders" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="orders">Order History</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                </TabsList>

                <TabsContent value="orders">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Order History</h2>
                    {orders.map((order, index) => (
                      <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Card className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h3 className="font-bold text-lg">{order.restaurant}</h3>
                              <p className="text-sm text-muted-foreground">Order #{order.id}</p>
                            </div>
                            <Badge
                              variant={order.status === "Delivered" ? "default" : "destructive"}
                            >
                              {order.status}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {order.date}
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold">₹{order.amount}</p>
                              <Button variant="outline" size="sm" className="mt-2">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="favorites">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">Favorite Restaurants</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {favorites.map((restaurant, index) => (
                        <motion.div
                          key={restaurant.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Card className="overflow-hidden">
                            <img
                              src={restaurant.image}
                              alt={restaurant.name}
                              className="w-full h-40 object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold text-lg">{restaurant.name}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {restaurant.cuisine}
                              </p>
                              <div className="flex justify-between items-center">
                                <Badge variant="secondary">⭐ {restaurant.rating}</Badge>
                                <Button size="sm">Order Now</Button>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="profile">
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Full Name</label>
                        <input
                          type="text"
                          defaultValue="John Doe"
                          className="w-full mt-1 p-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full mt-1 p-2 border rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <input
                          type="tel"
                          defaultValue="+91 9876543210"
                          className="w-full mt-1 p-2 border rounded-lg"
                        />
                      </div>
                      <Button className="gradient-hero">Update Profile</Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

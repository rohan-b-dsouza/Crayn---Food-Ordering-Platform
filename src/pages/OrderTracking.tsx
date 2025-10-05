import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Package, Truck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const OrderTracking = () => {
  const orderStatus = [
    { id: 1, title: "Order Confirmed", time: "2:30 PM", completed: true, icon: CheckCircle },
    { id: 2, title: "Preparing", time: "2:45 PM", completed: true, icon: Package },
    { id: 3, title: "Out for Delivery", time: "3:15 PM", completed: true, icon: Truck },
    { id: 4, title: "Delivered", time: "Expected by 3:45 PM", completed: false, icon: MapPin },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

          <Card className="p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold mb-1">Order #CR12345</h2>
                <p className="text-muted-foreground">From Pizza Italia</p>
              </div>
              <Badge className="bg-green-500 text-white">Out for Delivery</Badge>
            </div>

            <div className="space-y-6 mt-8">
              {orderStatus.map((status, index) => {
                const Icon = status.icon;
                return (
                  <motion.div
                    key={status.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          status.completed
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      {index < orderStatus.length - 1 && (
                        <div
                          className={`w-0.5 h-16 ${
                            status.completed ? "bg-primary" : "bg-muted"
                          }`}
                        ></div>
                      )}
                    </div>
                    <div className="flex-1 pt-2">
                      <h3
                        className={`font-semibold ${
                          status.completed ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {status.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{status.time}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Order Items</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Margherita Pizza</p>
                  <p className="text-sm text-muted-foreground">Quantity: 2</p>
                </div>
                <p className="font-medium">₹598</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Garlic Bread</p>
                  <p className="text-sm text-muted-foreground">Quantity: 1</p>
                </div>
                <p className="font-medium">₹149</p>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹796</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 mt-6">
            <h3 className="font-bold text-lg mb-2">Delivery Address</h3>
            <div className="flex gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p>123 Main Street, Apartment 4B, New Delhi, Delhi 110001</p>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTracking;

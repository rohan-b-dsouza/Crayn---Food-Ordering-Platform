import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Percent, Clock, Gift, Ticket } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "50% OFF on First Order",
    description: "Get flat 50% off on your first order. Maximum discount ₹100.",
    code: "FIRST50",
    icon: Percent,
    color: "text-primary",
    bgColor: "bg-primary/10",
    expiry: "Valid till 31st Dec 2025",
  },
  {
    id: 2,
    title: "Free Delivery",
    description: "Free delivery on all orders above ₹199.",
    code: "FREEDEL",
    icon: Gift,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950",
    expiry: "Valid for limited time",
  },
  {
    id: 3,
    title: "Buy 1 Get 1 Free",
    description: "Order one and get another absolutely free on selected restaurants.",
    code: "BOGO",
    icon: Ticket,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950",
    expiry: "Valid on weekends",
  },
  {
    id: 4,
    title: "40% OFF Upto ₹150",
    description: "Use code and get flat 40% discount up to ₹150 on orders above ₹299.",
    code: "SAVE40",
    icon: Percent,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950",
    expiry: "Valid for 7 days",
  },
  {
    id: 5,
    title: "Happy Hours Deal",
    description: "Get 30% off on all orders between 2 PM - 5 PM.",
    code: "HAPPY30",
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950",
    expiry: "Daily 2 PM - 5 PM",
  },
  {
    id: 6,
    title: "Weekend Special",
    description: "Enjoy 25% off on all orders during weekends.",
    code: "WEEKEND25",
    icon: Gift,
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-950",
    expiry: "Sat & Sun only",
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="gradient-hero py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Exclusive Offers & Deals
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Save more on every order with our amazing discounts and promotional offers
              </p>
            </motion.div>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer, index) => {
                const Icon = offer.icon;
                return (
                  <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                      <div className={`${offer.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                        <Icon className={`h-7 w-7 ${offer.color}`} />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">
                        {offer.description}
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm text-muted-foreground">Code:</span>
                          <Badge variant="secondary" className="font-mono font-bold">
                            {offer.code}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-2" />
                          {offer.expiry}
                        </div>
                        <Button className="w-full">Apply Offer</Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;

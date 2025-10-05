import { motion } from "framer-motion";
import { Percent, Gift, Truck, CreditCard } from "lucide-react";

const offers = [
  {
    icon: Percent,
    title: "Up to 60% OFF",
    description: "On select restaurants",
    color: "bg-orange-500",
  },
  {
    icon: Gift,
    title: "Buy 1 Get 1",
    description: "Special combo deals",
    color: "bg-purple-500",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders above ₹199",
    color: "bg-green-500",
  },
  {
    icon: CreditCard,
    title: "Cashback",
    description: "Up to ₹200 on payments",
    color: "bg-blue-500",
  },
];

const OffersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Best Offers For You</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="gradient-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-border"
              >
                <div className={`${offer.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <offer.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
                <p className="text-muted-foreground text-sm">{offer.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;

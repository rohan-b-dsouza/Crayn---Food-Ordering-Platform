import { motion } from "framer-motion";
import { Pizza, Soup, Coffee, IceCream, Salad, Fish } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Pizza", icon: Pizza, color: "bg-orange-500" },
  { name: "Biryani", icon: Soup, color: "bg-yellow-500" },
  { name: "Desserts", icon: IceCream, color: "bg-pink-500" },
  { name: "Drinks", icon: Coffee, color: "bg-blue-500" },
  { name: "Healthy", icon: Salad, color: "bg-green-500" },
  { name: "Seafood", icon: Fish, color: "bg-cyan-500" },
];

const Categories = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => navigate(`/restaurants?category=${encodeURIComponent(category.name)}`)}
              >
                <div className={`${category.color} p-6 rounded-2xl shadow-card group-hover:shadow-card-hover transition-all duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <p className="mt-3 font-medium text-sm text-center">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;

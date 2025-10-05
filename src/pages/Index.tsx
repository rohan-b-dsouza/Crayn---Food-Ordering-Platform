import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedRestaurants />
        <OffersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

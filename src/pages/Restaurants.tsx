import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";

const Restaurants = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState<string>(params.get("q") ?? "");
  const category = params.get("category") ?? undefined;
  const city = params.get("city") ?? undefined;
  const filter = useMemo(() => ({ query, category, city }), [query, category, city]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Search & Filter Section */}
        <section className="bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">All Restaurants</h1>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for restaurants or cuisines..."
                  className="pl-10"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      const next = new URLSearchParams(params);
                      if (query) next.set("q", query); else next.delete("q");
                      setParams(next, { replace: true });
                    }
                  }}
                />
              </div>
              <Button variant="outline" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Restaurant Listings */}
        <FeaturedRestaurants filter={filter} />
      </main>
      <Footer />
    </div>
  );
};

export default Restaurants;

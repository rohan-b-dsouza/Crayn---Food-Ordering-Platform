import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Section = {
  title: string;
  body: string;
  image?: string;
};

const SectionBlock = ({ section }: { section: Section }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <Card className="p-6 lg:p-8 grid lg:grid-cols-3 gap-6 items-center">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
        <p className="text-muted-foreground leading-relaxed">{section.body}</p>
      </div>
      {section.image && (
        <img src={section.image} alt={section.title} className="w-full h-48 object-cover rounded-lg" />
      )}
    </Card>
  </motion.div>
);

export default function StaticPage({
  title,
  intro,
  cta,
  sections,
}: {
  title: string;
  intro?: string;
  cta?: { label: string; href: string };
  sections: Section[];
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{title}</h1>
            {intro && <p className="text-white/90 max-w-2xl">{intro}</p>}
            {cta && (
              <a href={cta.href}>
                <Button className="mt-6">{cta.label}</Button>
              </a>
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 space-y-6">
            {sections.map((s, i) => (
              <SectionBlock key={i} section={s} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



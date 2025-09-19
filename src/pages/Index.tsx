import { HoneyHero } from "@/components/HoneyHero";
import { ProductSection } from "@/components/ProductSection";
import { AboutSection } from "@/components/AboutSection";
import { ProvincesSection } from "@/components/ProvincesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HoneyHero />
      <ProductSection />
      <AboutSection />
      <ProvincesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

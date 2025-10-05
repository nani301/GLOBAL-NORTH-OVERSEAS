import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import WorldMapSection from "@/components/WorldMapSection";
import ServicesSection from "@/components/ServicesSection";
import BestInstituteSection from "@/components/BestInstituteSection";
import ContactForm from "@/components/ContactForm";
import PartnerLogos from "@/components/PartnerLogos";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsCounter />
        <WorldMapSection />
        <ServicesSection />
        <BestInstituteSection />
        <ContactForm />
        <PartnerLogos />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

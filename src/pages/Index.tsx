
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BloodTypeSearch from "@/components/BloodTypeSearch";
import BloodInventory from "@/components/BloodInventory";
import DonorForm from "@/components/DonorForm";
import TestimonialSection from "@/components/TestimonialSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <Hero />
          <Features />
          <BloodTypeSearch />
          <BloodInventory />
          <DonorForm />
          <TestimonialSection />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;

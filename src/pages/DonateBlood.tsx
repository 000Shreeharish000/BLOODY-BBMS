
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DonorForm from "@/components/DonorForm";
import CTA from "@/components/CTA";

const DonateBlood = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Donate Blood</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Your blood donation can save up to three lives. Join thousands of donors and become a hero today.
            </p>
            <DonorForm />
          </div>
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default DonateBlood;

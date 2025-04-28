
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloodTypeSearch from "@/components/BloodTypeSearch";
import CTA from "@/components/CTA";

const FindBlood = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Find Blood</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Search for available blood groups in your area. We connect patients with the right blood donors quickly and efficiently.
            </p>
            <BloodTypeSearch />
          </div>
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default FindBlood;

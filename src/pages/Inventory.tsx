
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BloodInventory from "@/components/BloodInventory";

const Inventory = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">Blood Inventory</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              View current blood inventory levels across our network of blood banks and hospitals.
            </p>
            <BloodInventory />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Inventory;

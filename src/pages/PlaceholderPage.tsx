
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
              <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
              <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
                This page is under construction. Check back soon!
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default PlaceholderPage;

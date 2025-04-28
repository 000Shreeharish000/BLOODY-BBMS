
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DonateBlood from "./pages/DonateBlood";
import FindBlood from "./pages/FindBlood";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/donate" element={<DonateBlood />} />
          <Route path="/find" element={<FindBlood />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/about" element={<About />} />
          <Route path="/eligibility" element={<PlaceholderPage title="Donor Eligibility" />} />
          <Route path="/faq" element={<PlaceholderPage title="Frequently Asked Questions" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/support" element={<PlaceholderPage title="Support" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

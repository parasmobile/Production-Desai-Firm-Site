import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import PracticeAreas from "./pages/PracticeAreas";
import FamilyLaw from "./pages/practice-areas/FamilyLaw";
import CivilLitigation from "./pages/practice-areas/CivilLitigation";
import PersonalInjury from "./pages/practice-areas/PersonalInjury";
import LandUseZoning from "./pages/practice-areas/LandUseZoning";
import ProbateEstate from "./pages/practice-areas/ProbateEstate";
import BusinessLLC from "./pages/practice-areas/BusinessLLC";
import CountiesServed from "./pages/CountiesServed";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/practice-areas" element={<PracticeAreas />} />
            <Route path="/practice-areas/family-law" element={<FamilyLaw />} />
            <Route path="/practice-areas/civil-litigation" element={<CivilLitigation />} />
            <Route path="/practice-areas/personal-injury" element={<PersonalInjury />} />
            <Route path="/practice-areas/land-use-zoning" element={<LandUseZoning />} />
            <Route path="/practice-areas/probate-estate-administration" element={<ProbateEstate />} />
            <Route path="/practice-areas/business-llc-disputes" element={<BusinessLLC />} />
            <Route path="/counties-served" element={<CountiesServed />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

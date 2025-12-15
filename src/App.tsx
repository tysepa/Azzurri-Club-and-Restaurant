import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import WorkWithUs from "./pages/WorkWithUs";
import Menus from "./pages/Menus";
import Reserve from './pages/Reserve';
import NotFound from "./pages/NotFound";
import Club from "./pages/Club";
import Restaurent from "./pages/Restaurent"
import Pdf from "./pages/Pdf";
import Contact from "./components/Contact";
import LoginPage from "./pages/Login";
import EventsPage from "./components/Events";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/event" element={<EventsPage/>}/> 
          <Route path="/work-with-us" element={<WorkWithUs />} /> 
          <Route path="/menus" element={<Menus />} />
          <Route path ="/reserve" element={<Reserve/>}/>
          <Route path="/club-night" element={<Club />}/>
          <Route path="/restaurent" element={<Restaurent />}/>
          {/* <Route path="/pdf" element={<Pdf/>}/> */}
          <Route path="/contact" element={<Contact />}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

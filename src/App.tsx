import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { ProfileProvider } from "@/contexts/ProfileContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ProfileProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={
            <SignedOut>
              <Auth />
            </SignedOut>
          } />
          <Route path="/" element={
            <SignedIn>
              <Index />
            </SignedIn>
          } />
          <Route path="*" element={
            <>
              <SignedIn>
                <NotFound />
              </SignedIn>
              <SignedOut>
                <Auth />
              </SignedOut>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  </TooltipProvider>
);

export default App;

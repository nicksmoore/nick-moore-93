import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { ProfileProvider } from "@/contexts/ProfileContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const AppContent = () => {
  const { isLoaded, isSignedIn } = useAuth();
  
  // Show loading while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
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
  );
};

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <ProfileProvider>
      <AppContent />
    </ProfileProvider>
  </TooltipProvider>
);

export default App;

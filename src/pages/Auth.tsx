import React from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';

const Auth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900/20 via-background to-blue-900/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <Card className="glass-effect border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Welcome to Virtual Profiles
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin" className="mt-6">
                <SignIn 
                  forceRedirectUrl="/"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "bg-transparent shadow-none border-none",
                      headerTitle: "hidden",
                      headerSubtitle: "hidden",
                      socialButtonsBlockButton: "bg-card border border-border hover:bg-accent text-foreground",
                      formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                      formFieldInput: "bg-background border-border text-foreground",
                      formFieldLabel: "text-foreground",
                      footerActionLink: "text-primary hover:text-primary/80"
                    }
                  }}
                />
              </TabsContent>
              
              <TabsContent value="signup" className="mt-6">
                <SignUp 
                  forceRedirectUrl="/"
                  appearance={{
                    elements: {
                      rootBox: "w-full",
                      card: "bg-transparent shadow-none border-none",
                      headerTitle: "hidden", 
                      headerSubtitle: "hidden",
                      socialButtonsBlockButton: "bg-card border border-border hover:bg-accent text-foreground",
                      formButtonPrimary: "bg-primary hover:bg-primary/90 text-primary-foreground",
                      formFieldInput: "bg-background border-border text-foreground",
                      formFieldLabel: "text-foreground",
                      footerActionLink: "text-primary hover:text-primary/80"
                    }
                  }}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
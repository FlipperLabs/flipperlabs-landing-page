import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-primary/20 mb-8">404</div>
        
        <h1 className="text-3xl font-bold font-heading mb-4 text-foreground">
          Page not found
        </h1>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          
          <Button 
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

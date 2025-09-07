import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";

const HeroSection = () => {
  const handleSmoothScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Tag line */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 border border-border">
          <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-muted-foreground tracking-wider uppercase">
            AI Holding Company
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal tracking-tight mb-4 sm:mb-6 text-foreground leading-tight px-2">
          We build companies
          <br />
          in <span className="text-primary">consumer AI</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 font-normal">
          FlipperLabs is a holding company that builds and invests in 
          consumer-facing AI companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center space-y-4 px-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth group w-full max-w-sm sm:w-auto sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={() => handleSmoothScroll('apps')}
          >
            Our Companies
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary hover:border-primary text-foreground transition-smooth w-full max-w-sm sm:w-auto sm:max-w-none px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            onClick={() => handleSmoothScroll('contact')}
          >
            Connect With Us
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

        {/* Subtle animation hint */}
        <div className="mt-12 sm:mt-20 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-muted-foreground/30 rounded-full mx-auto">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-muted-foreground/50 rounded-full mx-auto mt-1.5 sm:mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
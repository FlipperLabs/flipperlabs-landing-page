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
    <section className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Tag line */}
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-border">
          <Building2 className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
            AI Holding Company
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 text-foreground leading-tight">
          We build companies
          <br />
          in <span className="text-primary">consumer AI</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          FlipperLabs is a holding company that builds and invests in 
          consumer-facing AI companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth group px-8 py-4 text-lg"
            onClick={() => handleSmoothScroll('apps')}
          >
            Our Companies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-secondary hover:border-primary text-foreground transition-smooth px-8 py-4 text-lg"
            onClick={() => handleSmoothScroll('contact')}
          >
            Connect With Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Subtle animation hint */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full mx-auto">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mx-auto mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
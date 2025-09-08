import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Sparkles, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-normal text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
              OUR COMPANIES
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-foreground px-4">
              Our portfolio of consumer AI companies
            </h2>
          </div>

          {/* Featured App */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <Card className="bg-card backdrop-blur-sm border-border hover:shadow-elegant transition-smooth group overflow-hidden">
              <div className="relative">
                {/* Gradient background for featured app */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                
                <CardHeader className="pb-4 sm:pb-6 pt-6 sm:pt-8 px-4 sm:px-6">
                  <div className="flex flex-col sm:flex-row items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full">
                      <div className="p-3 sm:p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight mb-2">Dev Perspective</CardTitle>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary text-xs font-normal">
                            Active Development
                          </Badge>
                          <Badge variant="outline" className="text-xs font-normal">
                            AI Development Tools
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    An AI-powered development team assistant that helps software teams ship faster with intelligent code review, 
                    automated testing suggestions, and real-time collaboration insights.
                  </CardDescription>
                  
                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-secondary/50 rounded-lg">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">AI Code Review</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-secondary/50 rounded-lg">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Team Analytics</span>
                    </div>
                    <div className="flex items-center space-x-2 sm:space-x-3 p-2.5 sm:p-3 bg-secondary/50 rounded-lg">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">Automated Testing</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start space-y-3 sm:space-y-4">
                    <Button 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth w-full sm:w-auto"
                    >
                      Request Early Access
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">
              More apps coming soon
            </h3>
            <p className="text-muted-foreground mb-8">
              We're building innovative AI-powered tools to help teams work better together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-3 sm:mb-4 tracking-wider uppercase">
              CONNECT
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground px-4">
              Let's build together
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-card backdrop-blur-sm border-border shadow-lg">
                <CardContent className="p-4 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">
                    Send us a message
                  </h3>
                  
                  <form className="space-y-4 sm:space-y-6">
                    <div>
                      <Input 
                        placeholder="Your name" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground"
                      />
                    </div>
                    
                    <div>
                      <Textarea 
                        placeholder="Your message"
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground min-h-[100px] sm:min-h-[120px] resize-none"
                      />
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
                      size="lg"
                    >
                      Send message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Partner Information */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6 sm:space-y-8 px-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                    Looking to partner?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    If you're building something cool, we'd love to hear from you. Our main focus is on consumer AI companies.
                  </p>
                </div>
                
                <div>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                    EMAIL US
                  </p>
                  <a 
                    href="mailto:hello@flipperlabs.app" 
                    className="text-primary hover:text-primary-hover transition-smooth font-medium text-sm sm:text-base break-all"
                  >
                    hello@flipperlabs.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center">
              <span className="text-lg font-bold font-heading text-foreground">
                flipperlabs
              </span>
            </div>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-8">
              <span className="text-sm text-muted-foreground">
                Building the future of consumer AI.
              </span>
              <a 
                href="mailto:hello@flipperlabs.app" 
                className="text-sm text-primary hover:text-primary-hover transition-smooth break-all"
              >
                hello@flipperlabs.app
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

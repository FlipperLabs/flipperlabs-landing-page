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
      <section id="apps" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              OUR COMPANIES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Our portfolio of consumer AI companies
            </h2>
          </div>

          {/* Featured App */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card backdrop-blur-sm border-border hover:shadow-elegant transition-smooth group overflow-hidden">
              <div className="relative">
                {/* Gradient background for featured app */}
                <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
                
                <CardHeader className="pb-6 pt-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        <Code2 className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-heading mb-2">Dev Perspective</CardTitle>
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Active Development
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            AI Development Tools
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-lg text-muted-foreground leading-relaxed mb-6">
                    An AI-powered development team assistant that helps software teams ship faster with intelligent code review, 
                    automated testing suggestions, and real-time collaboration insights.
                  </CardDescription>
                  
                  {/* Feature highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">AI Code Review</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Team Analytics</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-secondary/50 rounded-lg">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">Automated Testing</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary transition-smooth"
                    >
                      Request Early Access
                    </Button>
                    <Button variant="outline">
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
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              CONNECT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Let's build together
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="bg-card backdrop-blur-sm border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    Send us a message
                  </h3>
                  
                  <form className="space-y-6">
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
                        className="bg-background border-input text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
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
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    Looking to partner?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you're building something cool, we'd love to hear from you. Our main focus is on consumer AI companies.
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider uppercase">
                    EMAIL US
                  </p>
                  <a 
                    href="mailto:hello@flipperlabs.com" 
                    className="text-primary hover:text-primary-hover transition-smooth font-medium"
                  >
                    hello@flipperlabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <span className="text-lg font-bold font-heading text-foreground">
                flipperlabs
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <span className="text-sm text-muted-foreground">
                Building the future of consumer AI.
              </span>
              <a 
                href="mailto:hello@flipperlabs.com" 
                className="text-sm text-primary hover:text-primary-hover transition-smooth"
              >
                hello@flipperlabs.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
